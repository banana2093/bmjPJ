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






});