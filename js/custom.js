
//javascript for the next and previous buttons in carousel
$(function(){
    $(".next").on("click", function(e){
        //collects the current image we're on
        let currentImg = $(".image-shown");
        //moves through to the next available image
        let nextImg = currentImg.next();
        //selects first index
        if(nextImg.length == 0){
            nextImg = $(".carousel img").first();
        }
        //removes the class to make currentImg hidden; zindex to make sure the image is put as last image
        currentImg.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
        //replacing hidden image with shown image to show on screen; z-index to put the image at the fronts
        nextImg.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
        //resets
        $(".carousel img").not([currentImg, nextImg]).css("z-index", 1);
        e.preventDefault();
    });

    $(".previous").on("click", function(e){
        //collects the current image we're on
        let currentImg = $(".image-shown");
        //moves through to the previous available image
        let nextImg = currentImg.prev();
        //selects last index
        if(nextImg.length == 0){
            nextImg = $(".carousel img").last();
        }
        //removes the class to make currentImg hidden; zindex to make sure the image is put as last image
        currentImg.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
        //replacing hidden image with shown image to show on screen; z-index to put the image at the fronts
        nextImg.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
        //resets
        $(".carousel img").not([currentImg, nextImg]).css("z-index", 1);
        e.preventDefault();
    });
});
//**************************************************************************//
//Javascript for accoridon
$( function() {
    $( "#accordion" ).accordion();
  } );