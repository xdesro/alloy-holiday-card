import $ from "jquery";

// Forget Scroll Position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
$(document).ready(function() {
  $("html, body").scrollTop(0);
});

let windowHeight, windowWidth, navHeight, docHeight, navRatio;
const getParams = () => {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  navHeight = $('.nav').outerHeight();
  docHeight = $(document).outerHeight() - windowHeight;
  navRatio = navHeight / docHeight * -1;
}
getParams();
$(document).on("resize", getParams());

$(document).on("scroll", onScroll);

const navItems = $(".nav li");
const doc = document.getElementsByTagName("html")[0];
function onScroll(e) {
  const scrollPos = $(document).scrollTop();
  // Move Nav
  if (scrollPos > windowHeight) {
    $(".nav").css({
      transform: "translateY(" + (scrollPos - windowHeight) * navRatio + "px)"
    });
  }
  // Active States for Nav and Card
  navItems.each(function() {
    const currentLink = $(this);
    const targetSection = $(currentLink.attr("data-target"));
    const sectionTop = targetSection.position().top
    const halfWindow = Math.floor(windowHeight / 2);
    if (
      sectionTop <= scrollPos + halfWindow
      // sectionTop + targetSection.innerHeight() * 2 > scrollPos + halfWindow
    ) {
        $(".section").removeClass("active");
        $(".nav li").removeClass("active");
      currentLink.addClass("active");
      targetSection.addClass("active");
      const accentColor = $(currentLink.attr("data-target") + " .name p").css(
        "background-color"
      );
      doc.setAttribute("style", "--accent-color:" + accentColor);
    } 
  });
}

// Scroll on click
$(".nav li").on("click", function() {
  const elTarget = $(this).attr("data-target");
  const index = $(".nav li").index(this);
  $("html, body").animate(
    {
      scrollTop: $(elTarget).offset().top
    },
    index * 200 + 500, 'swing'
  );
});
$("#scroll-indicator").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: windowHeight
    },
    500
  );
});
(
//   // Snowflake
  () => {
    const SNOW_COUNT = 100;

    const snowContainer = document.querySelector(".snow-container");

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let width = window.outerWidth;
    let height = window.outerHeight;
    let i = 0;

    function onResize() {
      width = window.outerWidth;
      height = window.outerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = "#FFF";

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

    canvas.style.position = "absolute";
    canvas.style.left = canvas.style.top = "0";

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
    window.addEventListener("resize", onResize, false);

    snowContainer.appendChild(canvas);
  }
)();

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
