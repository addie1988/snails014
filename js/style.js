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
