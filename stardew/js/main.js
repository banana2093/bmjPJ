/// 메인 페이지 JS /////

$(() => {
    // 씨앗 무한 이동하기
    // 이동대상: .seed
    let seed = $(".seed");

    function moveSeed() {
        seed.css("left", "-=1px");

        setTimeout(moveSeed, 15);
        // parseInt() 단위를 없앰
        // 이동값
        let mvleft = parseInt(seed.css("left"));
        // console.log(mvleft);
        if (mvleft === -210) {
            seed.append(seed.find(".sed").first()).css({ left: "0" });
        }
    } /////// moveSeed ////////////
    moveSeed();
    ////////////////////////////////////////////////////////////////////////

    // 메인 구름 무한이동
    // 이동대상: .cloud
    let cloud = $(".cloud");

    function mvCloud() {
        cloud.animate({ left: "100%" }, 35000, "linear", function () {
            $(this)
                .css({ left: "-20%" })
                .animate({ left: "30%" }, 34000, "linear", mvCloud);
            // 끝난후에 mvCloud함수를 다시 재귀호출함!
        });
    }

    mvCloud();

    /////////////////////////////////////////////////////
    // 메인 별 깜박임 무한반복

    let star = $(".star");

    function moveStar() {
        star.animate({ opacity: "1" }, 3500, function () {
            $(this)
                .css({ opacity: "1" }, 3500, function () {
                    $(this).css({ opacity: "0" }, 3500);
                })
                .animate({ opacity: "0" }, 3500, moveStar);
        });
    }
    moveStar();
    ////////////////////////////////////////////////////////////

    // 로고 이동하기
    // 이동대상: .st
    let logo = $(".sts");
    
    function mvLogo() {
        // logo.animate({ left: "-1000px" }, 500);
        
            logo.animate({ left: "-2000px" }, 500,function(){
                logo.append(logo.find("div",this).first()).css({left:"-1000px"});
                setTimeout(mvLogo, 2000);
            });

        // let mvleft = parseInt(logo.css("left"));
        // if (mvleft ===-1000) {
        //         logo.append(logo.find(".stss").first()).css({ left: "0" });
    
        // }//if
       
    } // mvLogo
    mvLogo();
    
    



    // function mvLogo() {
    //     setTimeout(function () {
    //         logo.animate({ left: "-930px"}, 500,function(){
    //             setTimeout(function(){
    //                 logo.css({ left: "930px" }, 500, function () {
    //                     logo.css({left:"930px"},500,function(){

    //                         let mvleft = parseInt(logo.css("left"));

    //                         if (mvleft === 1860) {
    //                             setTimeout(function () {
    //                                 logo.append(logo.find(".stss").first()).css({left: "0",});
    //                             }, 2000);
    //                         } // if
    //                 });//logo.css3
    //                 });//logo.css2
    //         },2000) //setTimeout2
    //         }); //animation
    // },2000);//setTiomeout1
    //     }//mvLogo

    // function mvLogo(){
    // logo.css("left","+=825px");
    // setTimeout(mvLogo,300);
    // let mvleft = parseInt(logo.css("left"));
    // if(mvleft===825){
    //     logo.append(logo.find(".st").first(3)).css({left:"0"});
    // }
    // }

}); //////////////// JS //////////////////
