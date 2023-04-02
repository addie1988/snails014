$(document).ready(function () {
  $(".serialtabs-nav").serialtabs({
    fxIn: "slideDown",
    fxOut: "slideUp",
  });
});

$(function () {
  $("#serialtabs-nav li").click(function () {
    $("#serialtabs-nav li").eq($(this).index()).addClass("serve_clink").siblings().removeClass("serve_clink");
  })
})

