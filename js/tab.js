// $(".tab-button").click(function(){
//     var num = $(".tab-button").index(this); // index($(this)) 인지 index(this)인지 맨날 헷갈린다 ~.~

//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(this).addClass("active");
//     $(".tab-content").eq(num).addClass("show");
// })

// 위에 작성한 코드 for 문으로 쓰기..!!!!
var tabLength = $(".tab-button").length();

// for 반복문에서 var 사용하지 말고 let을 사용해야함. for 반복문 안에 i 변수가 있을 때 let으로 바꿔야 잘 동작.
// var 사용하면, for 반복문 이상으로 범위가 넓어지는데,
// let 사용하면, for 반복문 내에서 참조할 수 있는 범위를 가짐!
for ( let  i = 0; i < tabLength ; i++ ){ 
    $(".tab-button").eq(i).click(function(){
        $(".tab-button").removeClass("active");
        $(".tab-content").removeClass("show");

        $(this).addClass("active");
        $(".tab-content").eq(i).addClass("show");
    })
}

// 모달창 
$(".btn_modal_on").click(function(){
    $(".modal_wrap").show(); 
})

$(".btn_close").click(function(){
    $(".modal_wrap").hide(); 
})

// 모달창 배경을 누르면 모달창이 닫히는 기능
// 이벤트 버블링 !  (+)해당 요소의 부모요소 전체에 같은 기능이 적용됩니다. 
// 이벤트 버블링을 막기 위해 기능이 더 추가되어야 함.

$(".modal_bg").click(function(e){
    // e.target;                // 지금 실제로 클릭한 요소
    // e.currentTarget;         // 지금 이벤트리스너가 달린 곳
    // e.preventDefault();      // 기본 동작 막기 위한 함수.
    // $(this) << jquery용 || this << js용

    // 지금 실제로 클릭한게 배경일 때만 
    // $(".modal_wrap").hide(); 
    if ( e.target == $(".modal_wrap, .btn_close") ){
        $(".modal_wrap").hide(); 
    }

    // jquery 문법이랑 js 문법이 같이 쓰이면 문제가 될 때가 있는데 이걸 방지하기 위해 하나로 통일하는게 좋겟지
    
})