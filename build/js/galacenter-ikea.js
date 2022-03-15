$(function (){
    let optionM = {
        itemSelector: '.ideas-ikea__item',
        columnWidth: '.ideas-ikea__body .ideas-ikea__item',
        animate: true,
        percentPosition: true,
        gutter: 20,
    }
    $('.ideas-ikea__body').masonry(optionM);

    $(window).on('load resize',function () {
        let width = $(document).width();
        if (width < 767) {
            $('.ideas-ikea__body').masonry('destroy')
        }else{
            $('.ideas-ikea__body').masonry(optionM);
        }
    });
})