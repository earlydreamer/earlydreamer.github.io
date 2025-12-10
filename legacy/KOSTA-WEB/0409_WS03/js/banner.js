    
    //배너 텍스트 영역에 들어갈 내용
    let bannerList = ["국민의 은행이 되겠습니다.", "5060 웰컴패키지, 최대 7만원 혜택을 드립니다.", "타행이체, 자동이체 수수료 면제", "저녁 6시까지 영업합니다."]; 
    // 배너 가져오기
    let promotionBannerText = document.querySelector("#promotion .promotion_text");

    //배너 텍스트 초기화
    window.onload = () => {
        promotionBannerText.innerHTML = bannerList[0]; // 초기 텍스트를 첫 번째 항목으로 설정
    };

    //5초 간격으로 프로모션 배너 텍스트 변경
    setInterval(() => {
        //배너 텍스트를 랜덤으로 가져오기
        let randomIndex = Math.floor(Math.random() * bannerList.length);
        //배너 텍스트 변경하기
        promotionBannerText.innerHTML = bannerList[randomIndex];
    }, 5000); // 5초 간격으로 변경

