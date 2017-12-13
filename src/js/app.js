import $ from "jquery";
import Anime from "animejs";
import AOS from 'aos';

AOS.init({
    duration: 1000,
    easing: 'ease-in-sine',
    offset: 500
});

let windowHeight = $(window).height();

const sections = document.getElementsByClassName('section');
const navItems = $('.nav li');

// $(document).ready(function() {
    // $(sections).each(function(i) {
    //     $(this).attr('data-aos','fade-up');
    // })
// }) 
// 'transform', 'translateY(' + (i * 10 + 30) + ')'
// sections.forEach(function(el) {
//     console.log(el, this);
//     new ScrollMagic.Scene({
//           duration: windowHeight,
//           triggerElement: this
//         })
//         .setClassToggle(this, "active")
//         .addTo(controller);
// })

// $('.card').translucent('blur', 20);
// const cardHeight = $(".card")[0].scrollHeight;
// $(".card").css("height", cardHeight);

// const introExit = Anime.timeline({
//   autoplay: false,
//   duration: 1000,
//   easing: "easeInOutQuad",
//   complete: () => {
//     t1.remove();
//   }
// }).add({
//   targets: ".intro",
//   opacity: [1, 0],
//   height: 0
// });

// const revealCard = Anime.timeline({
//   autoplay: false,
//   easing: "easeInOutQuad",
//   duration: 500,
  
// }).add({
//     targets: ".card",
//     opacity: [0, 1],
//     delay: 500,
//     rotateY: [-25, 0]
// })
// .add({
//   targets: ".name",
//   width: [0, "100%"]
// });
// revealCard.play();

// Scroll binding
// const controller = new ScrollMagic.Controller();
// const t1 = new ScrollMagic.Scene({
//   duration: 0,
//   offset: 10
// })
//   .on("enter", introExit.play)
//   .on("remove", e => {
//     console.log(e);
//     revealCard.play();
//   })
//   .addTo(controller);

// Snowflake
(() => {
  const SNOW_COUNT = 300;

  const snowContainer = document.querySelector('.snow-container');

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  let width = window.outerWidth;
  let height = window.outerHeight;
  let i = 0;
  const active = false;

  function onResize() {
    width = window.outerWidth;
    height = window.outerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';

    requestAnimationFrame(update);
  }

  class Snowflake {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;

      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;

      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();

      this.r = 1 + Math.random() * 2;

      this.o = 0.5 + Math.random() * 0.5;
    }
  }

  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.top = '0';

  const snowflakes = [];
  let snowflake;
  for (i = 0; i < SNOW_COUNT; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }

  function update() {

    ctx.clearRect(0, 0, width, height);

    for (i = 0; i < SNOW_COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset();
      }
    }

    requestAnimationFrame(update);
  }

  onResize();
  window.addEventListener('resize', onResize, false);

  snowContainer.appendChild(canvas);
})();

// Console Easter Egg
const consoleStyles = [
  "background: linear-gradient(135deg, #E9625A 0%,#0A204C 100%);",
  "color: white",
  "padding: 10px 20px",
  "line-height: 35px",
  "font-family: sans-serif"
].join(";");
console.log(
  "%ccoded with ❤ by Henry Desroches at Alloy Magnetic // alloymagnetic.com. Happy Holidays!",
  consoleStyles
);
