import jQuery from "jquery";
const $ = jQuery;

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return t(o,e,e.document)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),e,e.document):t(jQuery,e,e.document)}("undefined"!=typeof window?window:this,function(e,t,o,n){"use strict";function r(){return b.height()+R.offset}function i(o,n,i,s){if(w===o&&(i=!1),D===!0)return!0;if(m[o]){if(M=!1,k===!0&&(R.afterRender(),k=!1),i&&"function"==typeof R.before&&R.before(o,g)===!1)return!0;if(S=1,O=p[o],k===!1&&w>o&&s===!1&&v[o]&&(l=r(),S=parseInt(g[o].outerHeight()/l),O=parseInt(p[o])+(g[o].outerHeight()-l)),R.updateHash&&R.sectionName&&(k!==!0||0!==o))if(history.pushState)try{history.replaceState(null,null,m[o])}catch(a){t.console&&console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.")}else t.location.hash=m[o];if(w=o,n)e(R.target).stop().scrollTop(O),i&&R.after(o,g);else{if(x=!0,e().velocity?e(R.target).stop().velocity("scroll",{duration:R.scrollSpeed,easing:R.easing,offset:O,mobileHA:!1}):e(R.target).stop().animate({scrollTop:O},R.scrollSpeed,R.easing),t.location.hash.length&&R.sectionName&&t.console)try{e(t.location.hash).length&&console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.")}catch(a){}e(R.target).promise().done(function(){x=!1,k=!1,i&&R.after(o,g)})}}}function s(e){function t(t){for(var o=0,n=e.slice(Math.max(e.length-t,1)),r=0;r<n.length;r++)o+=n[r];return Math.ceil(o/t)}var o=t(10),n=t(70);return o>=n?!0:!1}function a(e,t){for(var o=m.length;o>=0;o--)"string"==typeof e?m[o]===e&&(y=o,i(o,t,!0,!0)):o===e&&(y=o,i(o,t,!0,!0))}var c,u,l,h,f,d,p=[],m=[],g=[],v=[],y=0,w=0,S=1,H=!1,b=e(t),E=b.scrollTop(),M=!1,x=!1,T=!1,D=!1,I=[],N=(new Date).getTime(),k=!0,L=!1,O=0,z="onwheel"in o?"wheel":o.onmousewheel!==n?"mousewheel":"DOMMouseScroll",R={section:".section",sectionName:"section-name",interstitialSection:"",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,target:"html,body",standardScrollElements:!1,setHeights:!0,overflowScroll:!0,updateHash:!0,touchScroll:!0,before:function(){},after:function(){},afterResize:function(){},afterRender:function(){}},j=function(n){function a(t){e().velocity?e(R.target).stop().velocity("scroll",{duration:R.scrollSpeed,easing:R.easing,offset:t,mobileHA:!1}):e(R.target).stop().animate({scrollTop:t},R.scrollSpeed,R.easing)}function w(t){t&&(E=b.scrollTop());var o=R.section;v=[],R.interstitialSection.length&&(o+=","+R.interstitialSection),R.scrollbars===!1&&(R.overflowScroll=!1),l=r(),e(o).each(function(t){var o=e(this);R.setHeights?o.is(R.interstitialSection)?v[t]=!1:o.css("height","auto").outerHeight()<l||"hidden"===o.css("overflow")?(o.css({height:l}),v[t]=!1):(o.css({height:o.height()}),R.overflowScroll?v[t]=!0:v[t]=!1):o.outerHeight()<l||R.overflowScroll===!1?v[t]=!1:v[t]=!0}),t&&b.scrollTop(E)}function k(o,n){var r=R.section;R.interstitialSection.length&&(r+=","+R.interstitialSection),p=[],m=[],g=[],e(r).each(function(o){var n=e(this);o>0?p[o]=parseInt(n.offset().top)+R.offset:p[o]=parseInt(n.offset().top),R.sectionName&&n.data(R.sectionName)?m[o]="#"+n.data(R.sectionName).toString().replace(/ /g,"-"):n.is(R.interstitialSection)===!1?m[o]="#"+(o+1):(m[o]="#",o===e(r).length-1&&o>1&&(p[o]=p[o-1]+(parseInt(e(e(r)[o-1]).outerHeight())-parseInt(e(t).height()))+parseInt(n.outerHeight()))),g[o]=n;try{e(m[o]).length&&t.console&&console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")}catch(i){}t.location.hash===m[o]&&(y=o,H=!0)}),!0===o&&i(y,!1,!1,!1)}function O(){return v[y]?(E=b.scrollTop(),E>parseInt(p[y])?!1:!0):!0}function j(){return v[y]?(E=b.scrollTop(),l=r(),E<parseInt(p[y])+(g[y].outerHeight()-l)-28?!1:!0):!0}L=!0,e.easing.easeOutExpo=function(e,t,o,n,r){return t==r?o+n:n*(-Math.pow(2,-10*t/r)+1)+o},h={handleMousedown:function(){return D===!0?!0:(M=!1,void(T=!1))},handleMouseup:function(){return D===!0?!0:(M=!0,void(T&&h.calculateNearest(!1,!0)))},handleScroll:function(){return D===!0?!0:(c&&clearTimeout(c),void(c=setTimeout(function(){return T=!0,M===!1?!1:(M=!1,void h.calculateNearest(!1,!0))},200)))},calculateNearest:function(e,t){E=b.scrollTop();for(var o,n=1,r=p.length,s=0,a=Math.abs(p[0]-E);r>n;n++)o=Math.abs(p[n]-E),a>o&&(a=o,s=n);(j()&&s>y||O())&&(y=s,i(s,e,t,!1))},wheelHandler:function(o){if(D===!0)return!0;if(R.standardScrollElements&&(e(o.target).is(R.standardScrollElements)||e(o.target).closest(R.standardScrollElements).length))return!0;v[y]||o.preventDefault();var n=(new Date).getTime();o=o||t.event;var r=o.originalEvent.wheelDelta||-o.originalEvent.deltaY||-o.originalEvent.detail,a=Math.max(-1,Math.min(1,r));if(I.length>149&&I.shift(),I.push(Math.abs(r)),n-N>200&&(I=[]),N=n,x)return!1;if(0>a){if(y<p.length-1&&j()){if(!s(I))return!1;o.preventDefault(),y++,x=!0,i(y,!1,!0,!1)}}else if(a>0&&y>0&&O()){if(!s(I))return!1;o.preventDefault(),y--,x=!0,i(y,!1,!0,!1)}},keyHandler:function(e){return D===!0||o.activeElement.readOnly===!1?!0:x===!0?!1:void(38==e.keyCode||33==e.keyCode?y>0&&O()&&(e.preventDefault(),y--,i(y,!1,!0,!1)):(40==e.keyCode||34==e.keyCode)&&y<p.length-1&&j()&&(e.preventDefault(),y++,i(y,!1,!0,!1)))},init:function(){R.scrollbars?(b.on("mousedown",h.handleMousedown),b.on("mouseup",h.handleMouseup),b.on("scroll",h.handleScroll)):e("body").css({overflow:"hidden"}),b.on(z,h.wheelHandler),b.on("keydown",h.keyHandler)}},f={touches:{touchstart:{y:-1,x:-1},touchmove:{y:-1,x:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(t){if(D===!0)return!0;if(R.standardScrollElements&&(e(t.target).is(R.standardScrollElements)||e(t.target).closest(R.standardScrollElements).length))return!0;var o;if("undefined"!=typeof t&&"undefined"!=typeof t.touches)switch(o=t.touches[0],t.type){case"touchstart":f.touches.touchstart.y=o.pageY,f.touches.touchmove.y=-1,f.touches.touchstart.x=o.pageX,f.touches.touchmove.x=-1,f.options.timeStamp=(new Date).getTime(),f.touches.touchend=!1;case"touchmove":f.touches.touchmove.y=o.pageY,f.touches.touchmove.x=o.pageX,f.touches.touchstart.y!==f.touches.touchmove.y&&Math.abs(f.touches.touchstart.y-f.touches.touchmove.y)>Math.abs(f.touches.touchstart.x-f.touches.touchmove.x)&&(t.preventDefault(),f.touches.direction="y",f.options.timeStamp+f.options.timeGap<(new Date).getTime()&&0==f.touches.touchend&&(f.touches.touchend=!0,f.touches.touchstart.y>-1&&Math.abs(f.touches.touchmove.y-f.touches.touchstart.y)>f.options.distance&&(f.touches.touchstart.y<f.touches.touchmove.y?f.up():f.down())));break;case"touchend":f.touches[t.type]===!1&&(f.touches[t.type]=!0,f.touches.touchstart.y>-1&&f.touches.touchmove.y>-1&&"y"===f.touches.direction&&(Math.abs(f.touches.touchmove.y-f.touches.touchstart.y)>f.options.distance&&(f.touches.touchstart.y<f.touches.touchmove.y?f.up():f.down()),f.touches.touchstart.y=-1,f.touches.touchstart.x=-1,f.touches.direction="undetermined"))}},down:function(){y<p.length&&(j()&&y<p.length-1?(y++,i(y,!1,!0,!1)):(l=r(),Math.floor(g[y].height()/l)>S?(a(parseInt(p[y])+l*S),S+=1):a(parseInt(p[y])+(g[y].outerHeight()-l))))},up:function(){y>=0&&(O()&&y>0?(y--,i(y,!1,!0,!1)):S>2?(l=r(),S-=1,a(parseInt(p[y])+l*S)):(S=1,a(parseInt(p[y]))))},init:function(){if(o.addEventListener&&R.touchScroll){var e={passive:!1};o.addEventListener("touchstart",f.touchHandler,e),o.addEventListener("touchmove",f.touchHandler,e),o.addEventListener("touchend",f.touchHandler,e)}}},d={refresh:function(e,t){clearTimeout(u),u=setTimeout(function(){w(!0),k(t,!1),e&&R.afterResize()},400)},handleUpdate:function(){d.refresh(!1,!1)},handleResize:function(){d.refresh(!0,!1)},handleOrientation:function(){d.refresh(!0,!0)}},R=e.extend(R,n),w(!1),k(!1,!0),!0===H?i(y,!1,!0,!0):setTimeout(function(){h.calculateNearest(!0,!1)},200),p.length&&(h.init(),f.init(),b.on("resize",d.handleResize),o.addEventListener&&t.addEventListener("orientationchange",d.handleOrientation,!1))};return j.move=function(t){return t===n?!1:(t.originalEvent&&(t=e(this).attr("href")),void a(t,!1))},j.instantMove=function(e){return e===n?!1:void a(e,!0)},j.next=function(){y<m.length&&(y+=1,i(y,!1,!0,!0))},j.previous=function(){y>0&&(y-=1,i(y,!1,!0,!0))},j.instantNext=function(){y<m.length&&(y+=1,i(y,!0,!0,!0))},j.instantPrevious=function(){y>0&&(y-=1,i(y,!0,!0,!0))},j.destroy=function(){return L?(R.setHeights&&e(R.section).each(function(){e(this).css("height","auto")}),b.off("resize",d.handleResize),R.scrollbars&&(b.off("mousedown",h.handleMousedown),b.off("mouseup",h.handleMouseup),b.off("scroll",h.handleScroll)),b.off(z,h.wheelHandler),b.off("keydown",h.keyHandler),o.addEventListener&&R.touchScroll&&(o.removeEventListener("touchstart",f.touchHandler,!1),o.removeEventListener("touchmove",f.touchHandler,!1),o.removeEventListener("touchend",f.touchHandler,!1)),p=[],m=[],g=[],void(v=[])):!1},j.update=function(){return L?void d.handleUpdate():!1},j.current=function(){return g[y]},j.currentIndex=function(){return y},j.disable=function(){D=!0},j.enable=function(){D=!1,L&&h.calculateNearest(!1,!1)},j.isDisabled=function(){return D},j.setOptions=function(o){return L?void("object"==typeof o?(R=e.extend(R,o),d.handleUpdate()):t.console&&console.warn("Scrollify warning: setOptions expects an object.")):!1},e.scrollify=j,j});

// Forget Scroll Position
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
$(document).ready(function() {
  $("html, body").scrollTop(0);
});

let windowHeight, windowWidth, navHeight, docHeight, navRatio, halfWindow;
const html = document.getElementsByTagName("html")[0];
const getParams = () => {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  navHeight = $(".nav").outerHeight();
  docHeight = $(document).outerHeight() - windowHeight;
  navRatio = navHeight / $(".nav li").length;
  halfWindow = Math.floor(windowHeight / 2);
};
getParams();
$(document).on("resize", getParams());
$.scrollify({
  section: ".section",
  scrollSpeed: "200",
  interstitialSection: ".intro",
  updateHash: false,
});
const navItems = $(".nav li");
$(".section .card").viewportChecker({
  classToAdd: "active",
  classToAddForFullView: "fixed",
  offset: halfWindow,
  repeat: true,
  callbackFunction: el => {
    html.style.setProperty(
      "--accent-color",
      $(el)
        .find(".name p")
        .css("background-color")
    );
    const elId = $(el)
      .parent()
      .attr("id");
    navItems.each(function() {
      const navTarget = $(this)
        .attr("data-target")
        .substr(1);
      if (navTarget == elId) {
        $(this).addClass("active");
        const navIndex = navItems.index(this);
        $(".nav").css({
          transform: "translateY(" + -1 * navIndex * navRatio + "px)"
        });
      } else {
        $(this).removeClass("active");
      }
      const indexOfThis = navItems.index(this);
      const indexOfActive = navItems.index($(".active"));
      if (indexOfThis >= indexOfActive) {
        $(this).removeClass("partially-hidden");
        $(this).removeClass("hidden");
      } else if (indexOfActive - 1 === indexOfThis) {
        $(this).addClass("partially-hidden");
        $(this).removeClass("hidden");
      } else if (indexOfActive - 2 === indexOfThis) {
        $(this).removeClass("partially-hidden");
        $(this).addClass("hidden");
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
    500
  );
});
$("#scroll-indicator").on("click", function() {
  $("html, body").animate({ scrollTop: windowHeight }, 500);
});
// Snowflake
(() => {
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
