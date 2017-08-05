//Coded by Bryce P.; custom plugin
(function( $ ){
   $.fn.navProductGallery = function() {
	   var gallery = this.children(".nav-gallery-image-display").eq(0);
	   var nav = this.children(".nav-gallery-nav").eq(0); //Should only return one child
	   nav.children("img").click(function(event){
		   navEventHandler(event, gallery); //Function inside function so the parameter could be passed each click rather than just calling the function on initialization of the listener
	   }); //Sets the event handler for all of the children of the nav of the nav-product-gallery. should be images
   };
})( jQuery );

function setImage(srcUrl, gallery){
	var image = gallery.children("img").eq(0); //Should only select one. Jquery object
	fadeOutImage(image, function(){ //Fades out image. Sets new image. Fades in new image.
		image.attr("src", srcUrl);
		fadeInImage(image, function(){
		});
	});
}
function navEventHandler(jqueryEvent, gallery){
	var targetElement = jqueryEvent.target; //Should be an img
	var targetElementSrc = targetElement.getAttribute("src");
	setImage(targetElementSrc, gallery);
}
function fadeOutImage(image, successFunction){
	image.fadeTo(500,0,successFunction); //fades out the image then calls the success function. if the image has not been faded in, thhe fade out function WILL NOT work and the success function won't calls
}
function fadeInImage(image, sucessFunction){
	image.fadeTo(500, 1, sucessFunction); //Same as fading out. if the image is faded in, if you try fading it in again, the function WILL NOT work and the sucess function won't call
}
