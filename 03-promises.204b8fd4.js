!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),u=function(e){return document.querySelector(e)},a=u('input[name="delay"]'),c=u('input[name="step"]'),f=u('input[name="amount"]');u(".form").addEventListener("submit",(function(){var n=function(n){setTimeout((function(){new Promise((function(e,t){Math.random()>.3?e("✅ Fulfilled promise ".concat(n," in ").concat(u[n],"ms")):t("❌ Rejected promise ".concat(n," in ").concat(u[n],"ms"))})).then((function(n){e(r).Notify.success(n)})).catch((function(n){e(r).Notify.failure(n)}))}),o),o+=i,u.push(o)};event.preventDefault();for(var t=f.value,o=Number(a.value),i=Number(c.value),u=[0,o],l=1;l<=t;l+=1)n(l)}))}();
//# sourceMappingURL=03-promises.204b8fd4.js.map
