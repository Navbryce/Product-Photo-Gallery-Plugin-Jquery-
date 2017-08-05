//Coded by Bryce P.; custom plugin

function NavProductGallery(container, settings) {
    var navGallery = this;
    navGallery.container=container;
    navGallery.eventTrigger = settings.event; //should be "mouseover" or "click"
    navGallery.effect = settings.effect;

    if(navGallery.effect!=null){
        navGallery.fadeTime=settings.fadeTime;
        navGallery.fadeTime = parseInt(navGallery.fadeTime); //For some reason, on the fade function, if a string is used for the duration, it just defaults to the same value
        if(navGallery.fadeTime==null){
            navGallery.fadeTime=500; //Default fadetime if not specified
        }
    }else{
        navGallery.fadeTime=0; //Will treat it like a fade that takes 0 seconds. No transition on default
    }

    var containerObject = $(navGallery.container);
    var gallery = containerObject.children(".nav-gallery-image-display").eq(0);
    var nav = containerObject.children(".nav-gallery-nav").eq(0); //Should only return one child
    nav.children("img").on(navGallery.eventTrigger, function(event){
        navEventHandler(event, gallery); //Function inside function so the parameter could be passed each click rather than just calling the function on initialization of the listener
    }); //Sets the event handler for all of the children of the nav of the nav-product-gallery. should be images


    //Private functions
    function setImage(srcUrl, gallery){
        var image = gallery.children("img").eq(0); //Should only select one. Jquery object
        if(srcUrl!=image.attr("src")){ //Only call if the newSrcUrl is for a different picture. That way if you click on the same image again, it doesn't just fade in again
            fadeOutImage(image, function(){ //Fades out image. Sets new image. Fades in new image.
                image.attr("src", srcUrl);
                fadeInImage(image, function(){
                });
            });
        }
    }
    function navEventHandler(jqueryEvent, gallery){
        var targetElement = jqueryEvent.target; //Should be an img
        targetElement.className+="nav-product-gallery-active";
        var targetElementSrc = targetElement.getAttribute("src");
        setImage(targetElementSrc, gallery);
    }
    function fadeOutImage(image, successFunction){
        image.fadeTo(navGallery.fadeTime,0,successFunction); //fades out the image then calls the success function. if the image has not been faded in, thhe fade out function WILL NOT work and the success function won't calls
    }
    function fadeInImage(image, sucessFunction){
        image.fadeTo(navGallery.fadeTime, 1, sucessFunction); //Same as fading out. if the image is faded in, if you try fading it in again, the function WILL NOT work and the sucess function won't call
    }
}
