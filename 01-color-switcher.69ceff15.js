const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stop.setAttribute("disabled","");const e={interval:null,isActive:!1,start(){this.isActive||(this.isActive=!0,t.start.setAttribute("disabled",""),t.stop.removeAttribute("disabled"),this.interval=setInterval((()=>{t.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))},stop(){t.stop.setAttribute("disabled",""),t.start.removeAttribute("disabled"),clearInterval(this.interval),this.isActive=!1}};t.start.addEventListener("click",(()=>e.start())),t.stop.addEventListener("click",(()=>e.stop()));
//# sourceMappingURL=01-color-switcher.69ceff15.js.map
