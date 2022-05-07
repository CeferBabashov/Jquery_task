$(function(){                             
    $('.container img').mouseenter(function(){
        let img_src = $(this).attr('src');
        $('.one img').attr('src',img_src);
    });

    $('.one img').click(function(){
        let one_src=$(this).attr('src');
        $('.full_screen img').attr('src',one_src);
        $('.full_screen').toggle();
    });

    $('.full_screen').click(function(){
        $(this).toggle();
    });
})

