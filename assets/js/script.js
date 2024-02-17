window.onload = function () {
    var img_arr = document.getElementById("goods").getElementsByTagName("img");
    for (var i = 0; i < img_arr.length; i++) {
        img_arr[i].onmouseover = function () {
            console.log("ygtguh");
            var img_big = document.getElementById("big").getElementsByTagName("img")[0];
            var p = this.src;
            img_big.src = p.replace(".png", "_big.png");
        }
    }
};

const swiper = new Swiper('.image-slider', {
    mouswheel: {
        sensitivity: 2,
        eventsTarget: ".image-slider",
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 375px
      375: {
        slidesPerView: 2.9,
        spaceBetween: 30
      },
    }
  })