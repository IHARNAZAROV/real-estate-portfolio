/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.4 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
!function(a,b){function c(){y=D=z=A=B=C=K}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(){F={top:b.pageYOffset,left:b.pageXOffset}}function g(){return b.pageXOffset!=F.left?(f(),void z()):void(b.pageYOffset!=F.top&&(f(),i()))}function h(a){setTimeout(function(){b.pageYOffset!=F.top&&(F.top=b.pageYOffset,i())},0)}function i(){for(var a=H.length-1;a>=0;a--)j(H[a])}function j(a){if(a.inited){var b=F.top<=a.limit.start?0:F.top>=a.limit.end?2:1;a.mode!=b&&p(a,b)}}function k(){for(var a=H.length-1;a>=0;a--)if(H[a].inited){var b=Math.abs(t(H[a].clone)-H[a].docOffsetTop),c=Math.abs(H[a].parent.node.offsetHeight-H[a].parent.height);if(b>=2||c>=2)return!1}return!0}function l(a){isNaN(parseFloat(a.computed.top))||a.isCell||"none"==a.computed.display||(a.inited=!0,a.clone||q(a),"absolute"!=a.parent.computed.position&&"relative"!=a.parent.computed.position&&(a.parent.node.style.position="relative"),j(a),a.parent.height=a.parent.node.offsetHeight,a.docOffsetTop=t(a.clone))}function m(a){var b=!0;a.clone&&r(a),d(a.node.style,a.css);for(var c=H.length-1;c>=0;c--)if(H[c].node!==a.node&&H[c].parent.node===a.parent.node){b=!1;break}b&&(a.parent.node.style.position=a.parent.css.position),a.mode=-1}function n(){for(var a=H.length-1;a>=0;a--)l(H[a])}function o(){for(var a=H.length-1;a>=0;a--)m(H[a])}function p(a,b){var c=a.node.style;switch(b){case 0:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top=a.offset.top+"px",c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 1:c.position="fixed",c.left=a.box.left+"px",c.right=a.box.right+"px",c.top=a.css.top,c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 2:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top="auto",c.bottom=0,c.width="auto",c.marginLeft=0,c.marginRight=0}a.mode=b}function q(a){a.clone=document.createElement("div");var b=a.node.nextSibling||a.node,c=a.clone.style;c.height=a.height+"px",c.width=a.width+"px",c.marginTop=a.computed.marginTop,c.marginBottom=a.computed.marginBottom,c.marginLeft=a.computed.marginLeft,c.marginRight=a.computed.marginRight,c.padding=c.border=c.borderSpacing=0,c.fontSize="1em",c.position="static",c.cssFloat=a.computed.cssFloat,a.node.parentNode.insertBefore(a.clone,b)}function r(a){a.clone.parentNode.removeChild(a.clone),a.clone=void 0}function s(a){var b=getComputedStyle(a),c=a.parentNode,d=getComputedStyle(c),f=a.style.position;a.style.position="relative";var g={top:b.top,marginTop:b.marginTop,marginBottom:b.marginBottom,marginLeft:b.marginLeft,marginRight:b.marginRight,cssFloat:b.cssFloat,display:b.display},h={top:e(b.top),marginBottom:e(b.marginBottom),paddingLeft:e(b.paddingLeft),paddingRight:e(b.paddingRight),borderLeftWidth:e(b.borderLeftWidth),borderRightWidth:e(b.borderRightWidth)};a.style.position=f;var i={position:a.style.position,top:a.style.top,bottom:a.style.bottom,left:a.style.left,right:a.style.right,width:a.style.width,marginTop:a.style.marginTop,marginLeft:a.style.marginLeft,marginRight:a.style.marginRight},j=u(a),k=u(c),l={node:c,css:{position:c.style.position},computed:{position:d.position},numeric:{borderLeftWidth:e(d.borderLeftWidth),borderRightWidth:e(d.borderRightWidth),borderTopWidth:e(d.borderTopWidth),borderBottomWidth:e(d.borderBottomWidth)}},m={node:a,box:{left:j.win.left,right:J.clientWidth-j.win.right},offset:{top:j.win.top-k.win.top-l.numeric.borderTopWidth,left:j.win.left-k.win.left-l.numeric.borderLeftWidth,right:-j.win.right+k.win.right-l.numeric.borderRightWidth},css:i,isCell:"table-cell"==b.display,computed:g,numeric:h,width:j.win.right-j.win.left,height:j.win.bottom-j.win.top,mode:-1,inited:!1,parent:l,limit:{start:j.doc.top-h.top,end:k.doc.top+c.offsetHeight-l.numeric.borderBottomWidth-a.offsetHeight-h.top-h.marginBottom}};return m}function t(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function u(a){var c=a.getBoundingClientRect();return{doc:{top:c.top+b.pageYOffset,left:c.left+b.pageXOffset},win:c}}function v(){G=setInterval(function(){!k()&&z()},500)}function w(){clearInterval(G)}function x(){I&&(document[L]?w():v())}function y(){I||(f(),n(),b.addEventListener("scroll",g),b.addEventListener("wheel",h),b.addEventListener("resize",z),b.addEventListener("orientationchange",z),a.addEventListener(M,x),v(),I=!0)}function z(){if(I){o();for(var a=H.length-1;a>=0;a--)H[a]=s(H[a].node);n()}}function A(){b.removeEventListener("scroll",g),b.removeEventListener("wheel",h),b.removeEventListener("resize",z),b.removeEventListener("orientationchange",z),a.removeEventListener(M,x),w(),I=!1}function B(){A(),o()}function C(){for(B();H.length;)H.pop()}function D(a){for(var b=H.length-1;b>=0;b--)if(H[b].node===a)return;var c=s(a);H.push(c),I?l(c):y()}function E(a){for(var b=H.length-1;b>=0;b--)H[b].node===a&&(m(H[b]),H.splice(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),window.jQuery&&!function($){$.fn.Stickyfill=function(a){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);


var OFFSET = 30;
var ARTICLE_MARGIN_BOTTOM = 20;

var tocItems;
var pathLength;
// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0;
var BOTTOM_MARGIN = 0.1;




function demo() {
  return {
    init: function() {
      this.nav = $("nav");
      this.names = $("section.smart-nav");
      this.names.prepend("<div class='square sticky'></div>");
      
      this.highlight();
      
      $('.sticky').Stickyfill();
      
      window.addEventListener('resize', drawPath, false);
      window.addEventListener('scroll', sync, false);
      
      drawPath();
    },
    highlight: function() {
      this.currentArticle = this.findCurrentArticleInVP();
      var articleID = this.currentArticle.id;
      // we've got the content to highlight, let's add classes and expand menu-entries
      var $nav = this.nav;

      $nav.find("a").removeClass("active");
      $nav.find('a[href="#' + articleID + '"]').addClass("active");
      this.names.removeClass("active");
      $('section[id="' + articleID + '"]').addClass("active");
    },
    findCurrentArticleInVP: function() {
      // get the scroll height from the
      var viewport = $(".main")[0];
      //grab the last one in case nothing is found
      var article = this.names[this.names.length - 1];

      // while our item are above the viewport, we enumerate
      for (var i = 0, l = this.names.length; i < l; i++) {
        var articleTop = this.names[i].getBoundingClientRect().top;
        if (isElementInViewport(viewport, this.names[i])) {
          //since the current element is farther, take the prev one
          if (i === 0) {
            article = this.names[i];
          } else {
            article = this.names[i - 1];
          }
          break;
        }
      }
      return article;
    },

    stickySquare: function() {
      $(this.names).find(".square").removeClass("fixed");

      this.currentArticle = this.findCurrentArticleInVP();

      var headerHeight = $("header").height();
      var viewport = $(".main")[0];
      var viewportPosition = viewport.getBoundingClientRect().top;

      var currentArticle = this.currentArticle;
      var currentArticlePosition = currentArticle.getBoundingClientRect().top;
      var $square = $(currentArticle).find(".square");

      if (window.pageYOffset + OFFSET >= currentArticlePosition) {
        $square.addClass("fixed");
      }
    }
  };
}

function isElementInViewport(viewport, el) {
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  var viewportHeight = viewport.innerHeight - $('header').height();

  //10 is the top of the square from it's parent.
  return rect.top >= OFFSET;
}
function scrollToAnchor(aid) {
  var aTag = $("[id='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top - OFFSET + ARTICLE_MARGIN_BOTTOM }, "slow");
}

//Progress Nav
   function drawPath() {
      var toc = document.querySelector('.toc');
      tocItems = [].slice.call(toc.querySelectorAll('li'));

      // Cache element references and measurements
      tocItems = tocItems.map(function(item) {
         var anchor = item.querySelector('a');
         var target = document.getElementById(anchor.getAttribute('href').slice(1));

         return {
            listItem: item,
            anchor: anchor,
            target: target
         };
      });

      // Remove missing targets
      tocItems = tocItems.filter(function(item) {
         return !!item.target;
      });

      var path = [];
      var pathIndent;

      var tocPath = document.querySelector('.toc-marker path');

      tocItems.forEach(function(item, i) {

         var x = item.anchor.offsetLeft - 5,
            y = item.anchor.offsetTop,
            height = item.anchor.offsetHeight;

         if (i === 0) {
            path.push('M', x, y, 'L', x, y + height);
            item.pathStart = 0;
         } else {
            // Draw an additional line when there's a change in
            // indent levels
            if (pathIndent !== x) path.push('L', pathIndent, y);

            path.push('L', x, y);

            // Set the current path so that we can measure it
            tocPath.setAttribute('d', path.join(' '));
            item.pathStart = tocPath.getTotalLength() || 0;

            path.push('L', x, y + height);
         }

         pathIndent = x;

         tocPath.setAttribute('d', path.join(' '));
         item.pathEnd = tocPath.getTotalLength();

      });

      pathLength = tocPath.getTotalLength();

      sync();
   }

   function sync() {
      var tocPath = document.querySelector('.toc-marker path');

      var windowHeight = window.innerHeight;

      var pathStart = pathLength;
      var pathEnd = 0;

      var visibleItems = 0;
      var firstItemFound = false;

      tocItems.forEach(function(item) {

         var targetBounds = item.target.getBoundingClientRect();

         if (!firstItemFound && targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
            //only keep the minimum value.
            //this will allow us to have a line that englobes multiple items
            // pathStart = Math.min(item.pathStart, pathStart);
            pathStart = Math.min(item.pathStart, pathStart);
            // pathEnd = Math.max(item.pathEnd, pathEnd);
            // do not take 0 values
            pathEnd = Math.min(item.pathEnd, pathEnd) || Math.max(item.pathEnd, pathEnd);

            visibleItems += 1;

            item.listItem.classList.add('visible');
            firstItemFound = true;
         } else {
            item.listItem.classList.remove('visible');
         }

      });

      // Specify the visible path or hide the path altogether
      // if there are no visible items
      if (visibleItems > 0 && pathStart < pathEnd) {
         tocPath.setAttribute('stroke-dashoffset', '1');
         tocPath.setAttribute('stroke-dasharray', '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + pathLength);
         tocPath.setAttribute('opacity', 1);
      } else {
         tocPath.setAttribute('opacity', 0);
      }
   }



var demo = new demo();
demo.init();

$(window).on("scroll", function() {
  demo.highlight();
  //demo.stickySquare();
});
$("nav a").on("click", function(e) {
  e.preventDefault();
  scrollToAnchor(this.hash.substr(1));
  return false;
});