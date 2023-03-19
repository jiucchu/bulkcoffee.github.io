jQuery(document).ready(function(){
    
    $('.menu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide_img a:gt(0)').hide();

    setInterval(function(){
        $('.imgslide_img a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide_img');},5000);

    $('.storeSlide a:gt(0)').hide();

    setInterval(function(){
        $('.storeSlide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.storeSlide');},3000); 


    $('.button').click(function(){
        
        
        if(this.getAttribute('class').includes('left')){
           $('.imgslide_img a').first().fadeOut()
           .end().last('a').fadeIn()
           .prependTo('.imgslide_img')
            
        } // 1 fadeout 3 fadein 1 두번째로
        if(this.getAttribute('class').includes('right')){
             $('.imgslide_img a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide_img');
        } // 1 fadeout 2 fadein 1 마지막으로
        }
    )
});
// $('.imgslide_img a') -> a들 싹다 .first() 맨앞에거 fadeout // end 다시 a 싹다
// last 맨뒤에거 fadein // 그담에 걔 맨 앞으로 prepentTo
//end는 전에 선택했던거 다시 선택 first로 맨앞에거 선택했던거 다시 end로 a 싹다 선택