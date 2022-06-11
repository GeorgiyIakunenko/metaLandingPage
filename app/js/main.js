$(function () {
  $(".story__tab").on("click", function (e) {
    e.preventDefault();
    $(".story__tab").removeClass("story__tab--active");
    $(this).addClass("story__tab--active");

    $(".story__content-item").removeClass("story__content-item--active");
    $($(this).attr("href")).addClass("story__content-item--active");
  });

  $(document).ready(function () {
    $(".header__button").click(function (event) {
      $(".header__button, .menu__list").toggleClass("_active");
      $("body").toggleClass("_lock");
    });
  });

  $(document).ready(function () {
    $(".menu__list-link").click(function (event) {
      $(".header__button, .menu__list").removeClass("_active");
      $("body").removeClass("_lock");
    });
  });

  $(document).ready(function () {
    $(".header").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  AOS.init();

});






