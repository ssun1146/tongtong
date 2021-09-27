$(".tab-button").click(function(){
    var num = $(".tab-button").index(this); // index($(this)) 인지 index(this)인지 맨날 헷갈린다 ~.~

    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(this).addClass("active");
    $(".tab-content").eq(num).addClass("show");
})

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

