import $ from "jquery";

let windowHeight = $(window).height();
let windowWidth = $(window).width();
$(document).on("resize", () => {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
});
$(".card-background").css({
  "background-size": windowWidth + "px " + windowHeight + "px"
});
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
$(document).ready(function() {
  $("html, body").scrollTop(0);
});
$(document).on("scroll", onScroll);
function onScroll(e) {
  const scrollPos = $(document).scrollTop();

  // Move Nav
  const navHeight = $('.nav').outerHeight();
  const docHeight = $(document).outerHeight() - windowHeight;
  const navRatio = navHeight / docHeight * -1;
  if (scrollPos > windowHeight) {
    $(".nav").css({
      transform: "translateY(" + (scrollPos - windowHeight) * navRatio + "px)"
    });
  }

  // Active States for Nav and Card
  $(".nav li").each(function() {
    const currentLink = $(this);
    const refElement = $(currentLink.attr("data-target"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".section").removeClass("active");
      $(".nav li").removeClass("active");
      currentLink.addClass("active");
      refElement.addClass("active");
      const accentColor = $(currentLink.attr("data-target") + " .name p").css(
        "background-color"
      );
      const doc = document.getElementsByTagName("html")[0];
      doc.setAttribute("style", "--accent-color:" + accentColor);
    } else {
      currentLink.removeClass("active");
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
    index * 200 + 500
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
    const active = false;

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
