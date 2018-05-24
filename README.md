# Product-Photo-Gallery-Plugin-Jquery-
jQuery plugin that creates an amazon-like photo slider. Basically, a column of small thumbnails is placed next to one large photo. When the user clicks on a thumbnail, the large photo transitions to that photo. The "thumbnail" previews can also be a row.

# Installation and Use

**Prerequisites**:
- jQuery  

**Installation**:
- Include the "nav-product-gallery.js" and "NavProductGallery.css" on the page with photo gallery

**Use**
```new NavProductGallery(container, settings)```
*Container* - a DOM object not a jQuery object
*Settings* - A JavaScript Dictionary/Object
```
{
  effect: "fade", // currently the only option (don't include "effect" key if you don't want an effect
  fadeTime: {{some value in ms), // only specify if effect is "fade"
}
```

