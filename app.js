const mrHero = document.querySelector(".section-heading");
const intro = document.querySelector(".intro");
const dev = document.querySelector(".dev");
const neonCircle = document.querySelector(".home-img");
const socialLeft = document.querySelectorAll(".left");
const socialRight = document.querySelectorAll(".right");

// const hello = document.querySelector(".hello");

// new simpleParallax(proj, {
//   orientation: "left",
//   overflow: true,
//   scale: 1.2,
//   delay: 5,
// });
// new simpleParallax(mrHero, {
//   orientation: "down",
//   overflow: true,
//   scale: 5,
//   delay: 10,
// });

// new simpleParallax(intro, {
//   orientation: "left",
//   overflow: true,
//   scale: 3,
//   delay: 5,
// });
// // new simpleParallax(neonCircle, {
// //   orientation: "right",
// //   overflow: true,
// //   scale: 3,
// //   delay: 5,
// // });
// new simpleParallax(dev, {
//   orientation: "right",
//   overflow: true,
//   scale: 5,
//   delay: 5,
// });

// new simpleParallax(socialRight, {
//   orientation: "right",
//   overflow: true,
//   scale: 6,
//   delay: 5,
// });
// new simpleParallax(socialLeft, {
//   orientation: "left",
//   overflow: true,
//   scale: 6,
//   delay: 5,
// });

//   new simpleParallax(heading, {
//     orientation: 'up left ',
//     scale: 1,
//     delay: 2
//   });

const skillBar = document.querySelectorAll(".percent");
const skillBarLength = document.querySelectorAll(".skill-bar-box");
const skillPercent = [89, 79, 84, 59, 79, 89, 79, 69];

let output = [0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < skillPercent.length; i++) {
  output[i] = 0;
}

output.forEach((barr, index) => {
  skillBar[index].innerHTML = barr + "%";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const timer = setInterval(() => {
        skillPercent.forEach((bar, index) => {
          skillBar[index].innerHTML = output[index] + "%";
          if (window.innerWidth <= 500) {
            skillBarLength[
              index
            ].style.width = `calc(${output[index]}%* 0.5585996409335727)`;
          } 
          else if (window.innerWidth <= 600) {
            skillBarLength[
              index
            ].style.width = `calc(${output[index]}%* 0.6385996409335727)`;
          } else {
            skillBarLength[
              index
            ].style.width = `calc(${output[index]}%* 0.7077868852)`;
          }
          if (output[index] <= bar) {
            output[index]++;
          } else if (output[index] === bar) {
            clearInterval(timer);
          }
        });
      }, 25);
    }
  });
});

observer.observe(skillBar[0]);

// preloder
window.onload = function () {
  const preloader = document.getElementById("loader");
  preloader.style.display = "none";
};
