import jQuery from "jquery";
const $ = jQuery;

/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


// Forget Scroll Position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
$(document).ready(function() {
  $("html, body").scrollTop(0);
});

let windowHeight, windowWidth, navHeight, docHeight, navRatio, halfWindow;
const getParams = () => {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  navHeight = $('.nav').outerHeight();
  docHeight = $(document).outerHeight() - windowHeight;
  navRatio = navHeight / docHeight * -1;
  halfWindow = Math.floor(windowHeight / 2);
}
getParams();
$(document).on("resize", getParams());

const navItems = $('.nav li');
$('.section').viewportChecker({
  classToAdd: 'active',
  offset: halfWindow,
  repeat:true,
  callbackFunction: el => {
    console.log($(el));
    const elId = $(el).attr('id');
    navItems.each(function() {
      const navTarget = $(this).attr('data-target').substr(1);
      if (navTarget == elId) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
    }
    });
  }
});

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
    { scrollTop: windowHeight }, 500
  );
});
(
// Snowflake
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
