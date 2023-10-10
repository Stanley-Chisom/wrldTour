const sliderImage = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
];

let slider = document.querySelector(".background__img");
let sliderGridItems = [...document.querySelectorAll(".grid__item")];

let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 5000);

const changeSliderImage = () => {
  sliderGridItems.forEach((gridItem, index) => {
    // Use forEach instead of map

    setTimeout(() => {
      gridItem.classList.remove("hide");

      setTimeout(() => {
        if (index == sliderGridItems.length - 1) {
          if (currentImage >= sliderImage.length - 1) {
            currentImage = 0;
          } else {
            currentImage++;
          }

          slider.src = `img/${sliderImage[currentImage]}`;

          sliderGridItems.forEach((item, i) => {
            // Use forEach
            setTimeout(() => {
              item.classList.add("hide");
            }, i * 100);
          });
        }
      }, 100);
    }, index * 100);
  });
};

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 188) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});
