"use client";

import { RefObject, useEffectEvent, useLayoutEffect, useRef } from "react";

type UseDialogBehaviorOptions = {
    isOpen: boolean;
    onClose: () => void;
    dialogRef: RefObject<HTMLElement | null>;
};

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(", ");

function getFocusableElements(dialog: HTMLElement) {
    return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden"),
    );
}

export function useDialogBehavior({
    isOpen,
    onClose,
    dialogRef,
}: UseDialogBehaviorOptions) {
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const restoreBodyStyleRef = useRef<null | (() => void)>(null);
    const scrollPositionRef = useRef({ x: 0, y: 0 });
    const handleClose = useEffectEvent(onClose);

    useLayoutEffect(() => {
        if (!isOpen) {
            return;
        }

        previousFocusRef.current = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;

        const htmlStyle = document.documentElement.style;
        const bodyStyle = document.body.style;
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        scrollPositionRef.current = { x: scrollX, y: scrollY };
        const previous = {
            htmlOverflow: htmlStyle.overflow,
            htmlScrollBehavior: htmlStyle.scrollBehavior,
            bodyOverflow: bodyStyle.overflow,
            bodyPosition: bodyStyle.position,
            bodyTop: bodyStyle.top,
            bodyLeft: bodyStyle.left,
            bodyWidth: bodyStyle.width,
            bodyPaddingRight: bodyStyle.paddingRight,
        };
        const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

        htmlStyle.overflow = "hidden";
        bodyStyle.overflow = "hidden";
        bodyStyle.position = "fixed";
        bodyStyle.top = `-${scrollY}px`;
        bodyStyle.left = `-${scrollX}px`;
        bodyStyle.width = "100%";

        if (scrollbarGap > 0) {
            bodyStyle.paddingRight = `${scrollbarGap}px`;
        }

        restoreBodyStyleRef.current = () => {
            htmlStyle.overflow = previous.htmlOverflow;
            htmlStyle.scrollBehavior = "auto";
            bodyStyle.overflow = previous.bodyOverflow;
            bodyStyle.position = previous.bodyPosition;
            bodyStyle.top = previous.bodyTop;
            bodyStyle.left = previous.bodyLeft;
            bodyStyle.width = previous.bodyWidth;
            bodyStyle.paddingRight = previous.bodyPaddingRight;

            const { x, y } = scrollPositionRef.current;
            window.scrollTo({ left: x, top: y, behavior: "auto" });
            htmlStyle.scrollBehavior = previous.htmlScrollBehavior;
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const dialog = dialogRef.current;
            if (!dialog) {
                return;
            }

            const focusableElements = getFocusableElements(dialog);

            if (focusableElements.length === 0) {
                event.preventDefault();
                dialog.focus();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }

            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        requestAnimationFrame(() => {
            const dialog = dialogRef.current;
            if (!dialog) {
                return;
            }

            const [firstFocusableElement] = getFocusableElements(dialog);
            (firstFocusableElement ?? dialog).focus();
        });

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            restoreBodyStyleRef.current?.();
            restoreBodyStyleRef.current = null;

            requestAnimationFrame(() => {
                previousFocusRef.current?.focus({ preventScroll: true });
            });

            previousFocusRef.current = null;
        };
    }, [dialogRef, isOpen]);
}
