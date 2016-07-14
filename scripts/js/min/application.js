!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";e.ajaxChimp={regexPatterns:{success:/Please confirm by clicking on the link we just sent to (.+@.+)/,submit:/Submitting.../,error:{1:/Please enter a value/,2:/An email address must contain a single @/,3:/The domain portion of the email address is invalid \(the portion after the @: (.+)\)/,4:/The username portion of the email address is invalid \(the portion before the @: (.+)\)/,5:/This email address looks fake or invalid. Please enter a real email address/,6:/.+\#6592.+/,7:/(.+@.+) is already subscribed to list (.+)\..+<a href.+/}},defaultTranslations:{en:{success:"Please confirm by clicking on the link we just sent to $1",submit:"Submitting...",error:{1:"Please enter a value",2:"An email address must contain a single @",3:"The domain portion of the email address is invalid (after the @: $1)",4:"The username portion of the email address is invalid (before the @: $1)",5:"This email address looks fake or invalid. Please enter a real email address",6:"Too many subscribe attempts for this email address. Please try again in about 5 minutes.",7:"$1 is already subscribed to the list $2"}}},translations:{},defaultOptions:{language:"en",errorSelector:"#mce-error-response",successSelector:"#mce-success-response",token:null},successMessage:"Please confirm by clicking on the link we just sent to ",submitMessage:"Submitting...",init:function(t,n){e(t).ajaxChimp(n)}},e.ajaxChimp.getTranslation=function(t,n,i){if(e.ajaxChimp.all_translations[n]&&e.ajaxChimp.all_translations[n][i]){var a=e.ajaxChimp.regexPatterns[i],r=e.ajaxChimp.all_translations[n][i];if("regexp"===e.type(a))return t.replace(a,r);var o=e.ajaxChimp.getRegexMatch(t,i);if(o&&a[o]&&r[o])return t.replace(a[o],r[o])}return"en"!==n?e.ajaxChimp.getTranslation(t,"en",i):t},e.ajaxChimp.getRegexMatch=function(t,n){var i,a=e.ajaxChimp.regexPatterns[n];return e.each(a,function(e,n){return null!==t.match(n)?(i=e,!1):void 0}),i},e.fn.ajaxChimp=function(t){e.ajaxChimp.all_translations=e.extend({},e.ajaxChimp.defaultTranslations,e.ajaxChimp.translations);var n=e(this).map(function(n,i){var a=new e.Deferred,r=e(i);r.attr("novalidate","true");var o=e.extend({url:r.attr("action")},e.ajaxChimp.defaultOptions,t),s=r.find("input[type=email]");if(s.attr("name","EMAIL"),o.token){var l=r.find('input[name="'+o.token+'"]');if(0===l.length){var c=e("<div/>",{style:"position: absolute; left: -5000px;"});c.append(e("<input>",{type:"text",name:o.token,tabindex:"-1",value:""})),r.append(c)}else l.attr("name",o.token)}if(0===r.find('input[type="submit"]').length){var d=e("<input>",{type:"submit",style:"display: none;"});r.append(d)}var f=r.find(o.errorSelector),u=r.find(o.successSelector),h=o.url.replace("/post?","/post-json?").concat("&c=?");return r.on("submit",function(t){t.preventDefault();var n,i={};if(e.each(r.serializeArray(),function(e,t){i[t.name]=t.value}),e.ajax({url:h,data:i,dataType:"jsonp"}).done(function(t,l,c){if("success"===t.result)s.removeClass("error").addClass("valid"),0!==u.length&&(n=e.ajaxChimp.getTranslation(e.ajaxChimp.successMessage+i.EMAIL,o.language,"success"),u.text(n).fadeIn(500).delay(3e3).fadeOut(500));else if(s.removeClass("valid").addClass("error"),0!==f.length){try{var d=t.msg.split(" - ",2);n=void 0===d[1]?t.msg:d[1]}catch(h){n=t.msg}n=e.ajaxChimp.getTranslation(n,o.language,"error"),f.text(n).fadeIn(500).delay(3e3).fadeOut(500)}a.resolve(t,l,c,r)}).fail(function(e,t,n){a.reject(e,t,n,r)}),s.removeClass("valid error"),0!==u.length){e.ajaxChimp.getTranslation(e.ajaxChimp.submitMessage,o.language,"submit")}}),a});return 1===n.length?n[0]:n}}),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(e,n)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,require("jquery")):e.lity=t(e,e.jQuery||e.Zepto)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(){p[m>0?"addClass":"removeClass"]("lity-active")}function i(e){var n=t.Deferred();return C?(e.one(C,n.resolve),setTimeout(n.resolve,500)):n.resolve(),n.promise()}function a(e,n,i){if(1===arguments.length)return t.extend({},e);if("string"==typeof n){if("undefined"==typeof i)return"undefined"==typeof e[n]?null:e[n];e[n]=i}else t.extend(e,n);return this}function r(e){for(var t,n=decodeURI(e).split("&"),i={},a=0,r=n.length;r>a;a++)n[a]&&(t=n[a].split("="),i[t[0]]=t[1]);return i}function o(e,n){return e+(e.indexOf("?")>-1?"&":"?")+t.param(n)}function s(e){return t('<span class="lity-error"/>').append(e)}function l(e){if(!v.test(e))return!1;var n=t('<img src="'+e+'">'),i=t.Deferred(),a=function(){i.reject(s("Failed loading image"))};return n.on("load",function(){return 0===this.naturalWidth?a():void i.resolve(n)}).on("error",a),i.promise()}function c(e){var n;try{n=t(e)}catch(i){return!1}if(!n.length)return!1;var a=t('<span style="display:none !important" class="lity-inline-placeholder"/>');return n.after(a).on("lity:ready",function(e,t){t.one("lity:remove",function(){a.before(n.addClass("lity-hide")).remove()})})}function d(e){var n,i=e;return n=g.exec(e),n&&(i=o("https://www.youtube"+(n[2]||"")+".com/embed/"+n[4],t.extend({autoplay:1},r(n[5]||"")))),n=y.exec(e),n&&(i=o("https://player.vimeo.com/video/"+n[3],t.extend({autoplay:1},r(n[4]||"")))),n=w.exec(e),n&&(i=o("https://www.google."+n[3]+"/maps?"+n[6],{output:n[6].indexOf("layer=c")>0?"svembed":"embed"})),'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+i+'"></iframe></div>'}function f(e){function r(e){27===e.keyCode&&d()}function o(){var e=u.documentElement.clientHeight?u.documentElement.clientHeight:Math.round(h.height());v.css("max-height",Math.floor(e)+"px").trigger("lity:resize",[p])}function s(e,n){p&&(v=t(n),h.on("resize",o),o(),p.find(".lity-loader").each(function(){var e=t(this);i(e).always(function(){e.remove()})}),p.removeClass("lity-loading").find(".lity-content").empty().append(v),v.removeClass("lity-hide").trigger("lity:ready",[p,e]),w.resolve())}function l(e,i,a,o){w=t.Deferred(),m++,n(),p=t(a.template).addClass("lity-loading").appendTo("body"),a.esc&&h.on("keyup",r),setTimeout(function(){p.addClass("lity-opened lity-"+e).on("click","[data-lity-close]",function(e){t(e.target).is("[data-lity-close]")&&d()}).trigger("lity:open",[p,o]),t.when(i).always(t.proxy(s,null,o))},0)}function c(e,n,i){var a,r,o=t.extend({},$,y);if(n=t.extend({},x,g,n),n.handler&&o[n.handler])r=o[n.handler](e,f),a=n.handler;else{var s={};t.each(["inline","iframe"],function(e,t){o[t]&&(s[t]=o[t]),delete o[t]});var c=function(t,n){return n?(r=n(e,f),r?(a=t,!1):void 0):!0};t.each(o,c),a||t.each(s,c)}return r&&t.when(d()).done(t.proxy(l,null,a,r,n,i)),!!r}function d(){if(p){var e=t.Deferred();return w.done(function(){m--,n(),h.off("resize",o).off("keyup",r),v.trigger("lity:close",[p]),p.removeClass("lity-opened").addClass("lity-closed");var t=p,a=v;p=null,v=null,i(a.add(t)).always(function(){a.trigger("lity:remove",[t]),t.remove(),e.resolve()})}),e.promise()}}function f(e){if(!e.preventDefault)return f.open(e);var n=t(this),i=n.data("lity-target")||n.attr("href")||n.attr("src");if(i){var a=n.data("lity-options")||n.data("lity");c(i,a,n)&&(n.blur(),e.preventDefault())}}var p,v,g={},y={},w=t.Deferred().resolve();return f.handlers=t.proxy(a,f,y),f.options=t.proxy(a,f,g),f.open=function(e,t,n){return c(e,t,n),f},f.close=function(){return d(),f},f.options(e)}var u=e.document,h=t(e),p=t("html"),m=0,v=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,g=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,y=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,w=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,$={image:l,inline:c,iframe:d},x={esc:!0,handler:null,template:'<div class="lity" tabindex="-1"><div class="lity-wrap" data-lity-close><div class="lity-loader">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" title="Close (Esc)" data-lity-close>\xd7</button></div></div></div>'},C=function(){var e=u.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}();return f.version="1.6.5",f.handlers=t.proxy(a,f,$),f.options=t.proxy(a,f,x),t(u).on("click","[data-lity]",f()),f}),function(e){jQuery.fn.widowFix=function(t){var n={letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},i=e.extend(n,t);return this.length?this.each(function(){function t(){""===l&&(l=s.pop(),t())}var n,a=e(this);if(i.linkFix){var r=a.find("a:last");r.wrap("<var>");var o=e("var").html();n=r.contents()[0],r.contents().unwrap()}var s=e(this).html().split(" "),l=s.pop();if(!(s.length<=1)){if(t(),i.dashes){var c=["-","\u2013","\u2014"];e.each(c,function(e,t){return l.indexOf(t)>0?(l='<span style="white-space:nowrap;">'+l+"</span>",!1):void 0})}var d=s[s.length-1];if(i.linkFix){if(null!==i.letterLimit&&n.length>=i.letterLimit)return void a.find("var").each(function(){e(this).contents().replaceWith(o),e(this).contents().unwrap()});if(null!==i.prevLimit&&d.length>=i.prevLimit)return void a.find("var").each(function(){e(this).contents().replaceWith(o),e(this).contents().unwrap()})}else{if(null!==i.letterLimit&&l.length>=i.letterLimit)return;if(null!==i.prevLimit&&d.length>=i.prevLimit)return}var f=s.join(" ")+"&nbsp;"+l;a.html(f),i.linkFix&&a.find("var").each(function(){e(this).contents().replaceWith(o),e(this).contents().unwrap()})}}):void 0}}(jQuery),$(function(){function e(e){e.length&&$("html, body").animate({scrollTop:e.offset().top-80},500)}function t(e){var t=$(this),a=t.closest(".post-career");e.preventDefault(),a.hasClass(n)||i.find(".post-career").removeClass(n),a.toggleClass(n)}var n="reveal",i=$(".section-careers"),a=$('a[href="'+location.hash+'"]');i.length&&(a.length&&setTimeout(function(){window.scrollTo(0,0),e(a)},1),i.on("click",".career-deep-link",t))}),$(function(){function e(){var e=$(this),i=e.attr(n),r=$.parseJSON(e.attr(a)||"{}");if(i.trim().length)try{fbq(t,i,r)}catch(o){console.error(o)}}var t="track",n="data-fbq",i="[data-fbq]",a=n+"-data";$(document).on("click",i,e)}),$(function(){function e(){var e=$(this.hash);return e.length?($("html, body").animate({scrollTop:e.offset().top-86},500),!1):void 0}function t(){var e=$(".primary-header").height();$(window).scrollTop()>s.top-e?r.addClass(i).css("top",e+16+"px"):r.removeClass(i).css("top","0")}function n(){var e,t=r.find("a."+a);for(e=0;e<l.length;e++){var n=l[e],i=n.offset();if($(window).scrollTop()<i.top+n.height()-170){var s=r.find('[href="#'+n.attr("id")+'"]');t.is(s)||(r.find("a").removeClass(a),s.addClass(a),o.css("top",s.closest("li").position().top));break}}}var i="fixed",a="active",r=$(".fixed-nav"),o=r.find(".indicator"),s=r.offset();if(r.length){var l=r.find("a").map(function(){return $($(this).attr("href"))});location.hash&&setTimeout(function(){window.scrollTo(0,0),$('a[href="'+location.hash+'"]').click()},1),$(window).on("scroll",t),$(window).on("scroll",n),$('a[href*="#"]:not([href="#"])').on("click",e),$(window).trigger("scroll")}}),$(function(){var e=$(".primary-footer"),t=e.find("#email-signup-form"),n=t.find('input[type="email"]'),i=t.find("label");$.getJSON("/content/mailchimp.json").fail(function(){console.error(arguments)}).done(function(e){$.ajaxChimp.translations.en_leo=e,t.ajaxChimp({language:"en_leo",errorSelector:"label",successSelector:"label"})}),i.on("click touch",function(){i.attr("style",""),n.focus()})}),$(function(){function e(){var e=$(this),n=e.attr(t);"homepage_consult"===n?goog_report_conversion("https://provider.leohealth.com/registration"):"homepage_enroll"===n&&goog_report_conversion("https://provider.leohealth.com/join-leo")}var t="data-ga",n="[data-ga]";$(document).on("click",n,e)}),$(function(){function e(){var e=$(this),n=e.attr(t);if(n.trim().length)try{ga("send","event","Button","Click",n)}catch(i){console.error(i)}}var t="data-ga",n="[data-ga]";$(document).on("click",n,e)}),$(function(){var e="mini",t=$(window),n=$(".primary-header");t.on("scroll",function(){t.scrollTop()>100?n.addClass(e):n.removeClass(e)})}),$(function(){function e(){var e=a.find(i);if($(this).width()<=t&&!e.length){var r=a.find("tr th:last-child, tr td:last-child").remove().addClass(n).wrap("<tr/>").closest("tr");a.find("td:empty").closest("tr").remove(),a.find("tbody").append(r)}else if($(this).width()>t){var o=e.removeClass(n).closest("tr").remove(),s=a.find("tr");o.each(function(e){var t=s.eq(e);t.length||(t=$("<tr><td></td></tr>"),a.append(t)),t.append($(this).children())})}}var t=960,n="reformatted",i="."+n,a=$(".section-information table");a.length&&($(window).on("resize",e),$(window).trigger("resize"))}),$(function(){function e(e){var t=$(e.target),n=t.closest(".section-convenience, .section-tech"),i=n.find("a"),a=t.closest("li").index();t.closest("ul").attr("class","").addClass("active-"+a),i.removeClass(r),t.addClass(r)}function t(e){var t,n=$(e.target),i=n.closest("ul");n.closest(".section-convenience, .section-tech");i.attr("class",""),n.addClass(r),e.pageX>n.offset().left+n.width()?t=n.closest("li").next():e.pageX<n.offset().left&&(t=n.closest("li").prev()),t&&t.length||(t=n.closest("li")),i.find("a").removeClass(r),i.find("> li").removeClass(r),t.addClass(r).find("a").addClass(r),i.closest(".section-tech").length&&i.height(t.height())}function n(n){f.width()<=a?t(n):e(n)}function i(){var e=c.find(".content-column-inner ul > li > ul"),t=d.find(".content-column-inner ul > li > ul");return f.width()>a?(e.each(function(){var e=$(this);e.append(e.find(s).removeClass(o))}),t.parent().closest("ul").css("height",""),void t.each(function(){var e=$(this);e.append(e.find(s).removeClass(o))})):void(e.find(s).length||(e.each(function(){var e=$(this);e.find("li:first-child").after(e.find("li:last-child").remove().addClass(o))}),t.each(function(){var e=$(this);e.prepend(e.find("li:gt(-3)").remove().addClass(o))}),c.find(".content-column-inner ul > li:first-child > a").trigger("click"),d.find(".content-column-inner ul > li:first-child > a").trigger("click")))}var a=960,r="active-tab",o="moved",s="."+o,l=$(".section-partner"),c=$(".section-convenience"),d=($(".section-care"),$(".section-tech")),f=$(window);l.find("ul").offset();c.on("click touch","a",n),d.on("click touch","a",n),c.find("a:first").trigger("click"),d.find("a:first").trigger("click"),f.on("resize orientationchange",i),f.trigger("resize")}),$(function(){var e=$(".join-leo");e.length&&fbq("track","ViewContent")}),$(function(){function e(){$("body").toggleClass(t)}var t="no-scroll";$(document).on("lity:open",e),$(document).on("lity:remove",e)}),$(function(){function e(){var e=($(this).parent().height(),$(this).parent().width()),t=$(this),n=t.height(),i=t.width();n>i?t.addClass("ww").removeClass("wh"):t.addClass("wh").removeClass("ww");var a=t.height(),r=t.width(),o=(r-e)/2;r>a&&t.css({left:"-"+o+"px",top:0})}function t(){var e=$(this),t=e.next(),n=0;t.find("li").each(function(){n+=$(this).outerHeight(!0)}),t.css({"padding-top":(t.height()-n)/2+"px"}),t.parent().closest("ul").hide().show(0)}var n=$(".column-3 .content-column-inner > p:first-child img"),i=$(".section-team, .section-advisors").find(".content-column-inner > ul > li > img");n.on("load",e),n.trigger("load"),i.on("leo.verticallyenter",t),$(window).on("load",function(){i.trigger("leo.verticallyenter")}),$(".join-leo .primary-content p, .join-leo .primary-content li").widowFix()}),$(function(){function e(){a&&r.find(".primary-content section:first-child").height(i.height())}var t=960,n=480,i=$(window),a=i.width()<n,r=(!a&&i.width()<t,$(".home, .how-it-works"));i.on("resize orientationchange",e),i.trigger("resize")}),$(function(){var e="today",t="today-time",n=$(".section-partner"),i=$(".section-information"),a=i.find("table tr");n.find("p > img").parent().addClass("full");var r=new Date,o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=o[r.getDay()],l=i.find("th:contains("+s+"),td:contains("+s+")"),c=a.index(l.closest("tr")),d=a.eq(c+1).find("td:nth-child("+(l.index()+1)+")");l.addClass(e),d.addClass(t)});