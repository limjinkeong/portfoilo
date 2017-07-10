$(function(){
    $('.menu>.depth1>.depth1_1>.depth1_2>.top_nav').hover(function(e){
            $('.depth1_2>.depht2>.depth2_1>.depth2_2').find('.bottom_nav').stop().slideDown();
        },
        function(){
            $('.depth1_2>.depht2>.depth2_1>.depth2_2').find('.bottom_nav').stop().slideUp();
        })
})
