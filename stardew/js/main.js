/// 메인 페이지 JS /////

$(()=>{

    // 씨앗 무한 이동하기
    // 이동대상: .seed
    let seed = $(".seed");

    function moveSeed(){
        seed.css("left","-=1px");

        setTimeout(moveSeed,15);
        // parseInt() 단위를 없앰
        // 이동값
        let mvleft = parseInt(seed.css("left"));
        // console.log(mvleft);
        if(mvleft===-210){
            seed.append(seed.find(".sed").first())
            .css({left:"0"});

        }
    } /////// moveSeed ////////////
    moveSeed();
    ////////////////////////////////////////////////////////////////////////

    // 메인 구름 무한이동
    // 이동대상: .cloud
    let cloud = $(".cloud");

    function mvCloud(){
        cloud
        .animate({left:"100%"},35000,"linear",function(){
            $(this).css({left:"-20%"})
            .animate({left:"30%"},34000,"linear",mvCloud)
            // 끝난후에 mvCloud함수를 다시 재귀호출함!
        })

    }

    mvCloud();
    

    // function moveCloude(){
    //     cloud.css("right","-=1px");

    //     setTimeout(moveCloude,3000);
    //     let mvright = parseInt(cloud.css("right"));
    //     // console.log(mvright);
    //     if(mvright===-1000){
    //         cloud.css({right:"200"});
    //     }
    // }//////// moveCloude ////////////
    // moveCloude();
});