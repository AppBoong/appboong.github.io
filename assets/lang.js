// Shows the Korean or English block for the visitor's browser language.
(function(){var ko=(navigator.language||"").toLowerCase().indexOf("ko")===0;
document.querySelectorAll("[lang-block]").forEach(function(el){if(el.getAttribute("lang-block")===(ko?"ko":"en"))el.style.display="block";});})();
