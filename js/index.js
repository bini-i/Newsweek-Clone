$(document).ready(() => {
  $(window).scroll(() => {
    const windowTop = $(window).scrollTop() + 1;
    console.log("Helo there");
    if (windowTop > 50) {
      $("#banner-effect").addClass("bootstrap-override fixed");
      $("#banner-effect").css("position", "fixed");
      $("#menu-btn").css("display", "block");
    } else {
      $("#banner-effect").removeClass("bootstrap-override fixed");
      $("#banner-effect").css("position", "relative");
      $("#menu-btn").css("display", "none");
    }
  });
});
