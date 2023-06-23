function filter_object_img() {
    document.getElementById("product_main").style.display = "block";
  }
  
  function productClose() {
    document.getElementById("product_main").style.display = "none";
  }
  
  var productSlideshow = 1;
  productSlideshowContent(productSlideshow);
  
  function productImgButton(n) {
    productSlideshowContent((productSlideshow += n));
  }

  function filter_imgDot(n) {
    productSlideshowContent((productSlideshow = n));
  }
  
  function productSlideshowContent(n) {
    var i;
    var filter_object_img = document.getElementsByClassName("filter_object_img_content_img");
    var dot = document.getElementsByClassName("_filter_imgDotdot");
    var productText = document.getElementById("filter_text_conntent_text");
    if (n > filter_object_img.length) {
      productSlideshow = 1;
    }
    if (n < 1) {
      productSlideshow = filter_object_img.length;
    }
    for (i = 0; i < filter_object_img.length; i++) {
        filter_object_img[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" productActive", "");
    }
    filter_object_img[productSlideshow - 1].style.display = "block";
    dot[productSlideshow - 1].className += " productActive";
    productText.innerHTML = dot[productSlideshow - 1].alt;
  }