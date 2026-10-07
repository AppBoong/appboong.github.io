// Links with data-lang="ko|en" switch which [lang-block] is shown (after lang.js picked the browser's).
(function(){document.querySelectorAll("[data-lang]").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();
var want=a.getAttribute("data-lang");document.querySelectorAll("[lang-block]").forEach(function(el){el.style.display=el.getAttribute("lang-block")===want?"block":"none";});});});})();
