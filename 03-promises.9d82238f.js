!function(){var e=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]');function t(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".submit").addEventListener("click",function(c){c.preventDefault();for(var u=e.valueAsNumber,a=n.valueAsNumber,i=o.valueAsNumber,r=1;r<=i;r++)t(r,u).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),u+=a}())}();
//# sourceMappingURL=03-promises.9d82238f.js.map