// 셀렉터.dataset.id

// html에 데이터셋을 넣어둡니다 > 이렇게 function 넣기 아주 좋음 

$(".list").click(function(e){
    // var num = $(".tab-button").index($(this))
    openTab(e.target.dataset.id); // js 버전
})

// $(".list").data('id', '값'); // jquery버전 


// 함수로 축약할 때, 사용한 변수는 파라미터로 넣어주면 아주 좋지요 +_+
function openTab(num){
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(this).addClass("active");
    $(".tab-content").eq(num).addClass("show");
}

