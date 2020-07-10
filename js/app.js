$('.thumbnails').on('click', 'li a', function(event){
    event.preventDefault();
    const temp = $(this).parent().parent('.thumbSelected');
    console.log(temp.html());
    let count = 0;
    temp.each(function(){
        count += 1;
        console.log(count);
    });
    
    $('.thumbSelected').each(function(){
        $(this).removeClass('thumbSelected');
    });
    const largeImageSRC = $(this).attr('href');
    const largeImage = $(this).parent().parent().prev().children();
    largeImage.attr("src", largeImageSRC);
    $(this).addClass('thumbSelected');
});
