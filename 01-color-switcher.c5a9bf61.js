const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){o=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`.toString();r.style.backgroundColor=t}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));let o=null;
//# sourceMappingURL=01-color-switcher.c5a9bf61.js.map