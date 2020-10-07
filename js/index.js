$(document).ready(() => {
  $(window).scroll(() => {
    const windowTop = $(window).scrollTop() + 1;
    if (windowTop > 50) {
      $("#nav_bar_menu").addClass("fixed");
      $("#ntw_logo").css("display", "flex");
      $("#nav_bar_sub_links").css("display", "none");
    } else {
      $("#nav_bar_menu").removeClass("fixed");
      $("#ntw_logo").css("display", "none");
      $("#nav_bar_sub_links").css("display", "flex");
    }
  });
});
