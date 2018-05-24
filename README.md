# Product-Photo-Gallery-Plugin-Jquery-
jQuery plugin that creates an amazon-like photo slider. Basically, a column of small thumbnails is placed next to one large photo. When the user clicks on a thumbnail, the large photo transitions to that photo. The "thumbnail" previews can also be a row.

# Installation

**Prerequisites**:
- jQuery  

**Installation**:
- Include the "nav-product-gallery.js" and "NavProductGallery.css" on the page with photo gallery

# Use
**Gallery HTML:**  
The example below uses a bootstrap class "col-md-4", this is optional. All other classes are required. The images inside the div with class "nav-gallery-nav" are the thumbnail images/the images in the gallery. The image in the div with class "nav-gallery-image-display" is the default image of the slider (when the page first loads).  
```
<div class="col-md-4">
                <div class="nav-product-gallery">
                    <div class="nav-gallery-nav">
                        <img src="./Pictures/march.jpg">
                        <img src="./Pictures/people.jpg">
                        <img src="./Pictures/event.png">
                    </div>
                    <div class="nav-gallery-image-display">
                        <img src="./Pictures/march.jpg" style="opacity: 1;">
                    </div>
                </div>
</div>
```

**Intialize Gallery:**
To initialize a gallery: ```new NavProductGallery(container, settings)```  
*Container* - a DOM object not a jQuery object  
*Settings* - A JavaScript Dictionary/Object  
```
{
  effect: "fade", // currently the only option (don't include "effect" key if you don't want an effect
  fadeTime: {{some value in ms), // only specify if effect is "fade"
}
```

