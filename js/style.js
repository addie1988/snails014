// header
$(document).ready(function () {
  $(".menu_click").click(function () {
    $(".menu_click").toggleClass("menu_click_active");
  });
  $(".menu_click").click(function () {
    $(".menuContent").toggleClass("menuContent_active");
  });
});

// header_scroll
$("a[href^='#']").fixedHeaderScroll({
  headerSelector: "nav",
});

// header
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".textBoxContent").removeClass("textBoxContent_Active");
    } else {
      $(".textBoxContent").addClass("textBoxContent_Active");
    }
  });
});
