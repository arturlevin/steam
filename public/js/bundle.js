(()=>{var e={399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USER:1,CHAR:2,MASK:3}},643:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return[];for(var a=[],n=!1,s=0;s<e.length;s++){var r=t[e[s]];if(n&&r&&(r=null,n=!1),r)r.regexp&&a.push(r);else{if(!n&&"\\"===e[s]){n=!0;continue}n=!1,a.push({char:e[s],next:null})}}return a}},842:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.data,a=e.input,n=void 0===a?"":a,r=e.selection,i=e.mask,o=e.maskChar,l=e.maskString,c=[],u="",d=0,m=0,h=0,p=0;i[d];){var f=t.length>m?t[m]:null,v=i[d],g=null;if(r.start<=d&&h<n.length&&(g=n.slice(h)),v.char&&(g&&g[0]===v.char?h++:(f&&(f.char===v.char||f.type!==s.default.USER)||n)&&m++,c.push({char:v.char,type:s.default.CHAR}),g&&p++,u+=v.char),v.regexp){var k=null;if(g){for(var y=0;!v.regexp.test(g[y])&&g.length>y;)y++,h++;g.length>y&&(h++,p++,m++,k=g[y],c.push({char:k,type:s.default.USER}),u+=k)}if(!k){if(f&&f.type===s.default.CHAR&&t.length>m+1){m++;continue}f&&f.type===s.default.USER&&v.regexp.test(f.char)?(c.push({char:f.char,type:s.default.USER}),u+=f.char,m++):(k=l?l[d]:o,c.push({char:k,type:s.default.MASK}),t.length>d&&m++,u+=k)}}d++}for(var w=r.start+p,S=c.length-1,_=0;S>=0&&c[S].type!==s.default.USER;)c[S].type===s.default.MASK&&(_=0),c[S].type===s.default.CHAR&&_++,S--;S+=_;for(var b="",C=0;C<=S;C++)b+=c[C].char;return{value:c,visibleValue:b,maskedValue:u,selection:{start:w,end:w}}};var n,s=(n=a(399))&&n.__esModule?n:{default:n}},478:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.value,a=e.selection,n=e.reformat,r=(e.mask,e.maskChar),i=e.maskString;if(a.end<a.start){var o=a.end;a.end=a.start,a.start=o}return a.start===a.end?t:t.length>a.start?t.slice(0,a.start).concat(function(){if(n)return"";if(i){for(var e=[],t=a.start;t<a.end;t++)e.push({char:i[t],type:s.default.MASK});return e}return function(e){for(var t=[],a=0;a<e;a++)t.push({char:r,type:s.default.MASK});return t}(a.end-a.start)}(),t.slice(a.end,t.length)):t};var n,s=(n=a(399))&&n.__esModule?n:{default:n}},217:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createInput=t.defaults=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=l(a(643)),r=l(a(842)),i=l(a(478)),o=l(a(399));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t){var a=t.value,n=t.mask,r=t.reformat,i=t.maskFormat,o=t.maskChar,l=t.maskString;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l&&l.length!==n.length)throw new Error("maskString must have same length as mask");if(o.length>1)throw new Error("maskChar must have only 1 char");this._maskString=l,this._maskChar=o,this._reformat=r,this.selection={start:0,end:0},this.setMaskFormat(i),this._mask=(0,s.default)(n,this._maskFormat),this.setValue(a)}return n(e,[{key:"setMaskFormat",value:function(e){this._maskFormat=e.reduce((function(e,t){return e[t.str]=t,e}),{})}},{key:"input",value:function(e){var t=this._value,a=void 0;this._reformat?a=this._reformat({data:t,input:e,selection:this.selection}):(t=(0,i.default)({value:t,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString}),this.selection.end=this.selection.start,a=(0,r.default)({data:t,input:e,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})),this._value=a.value,this._maskedValue=a.maskedValue,this._visibleValue=a.visibleValue,this.setSelection(a.selection)}},{key:"setSelection",value:function(e){var t=e.start,a=e.end;this.selection={start:t,end:a}}},{key:"getSelection",value:function(){return{start:this.selection.start,end:this.selection.end}}},{key:"backspace",value:function(){this.removePreviosOrSelected()}},{key:"paste",value:function(e){this.input(e)}},{key:"setMask",value:function(e){this._mask=(0,s.default)(e,this._maskFormat),this.setValue(this._value)}},{key:"getState",value:function(){return{value:this.getValue(),maskedValue:this.getMaskedValue(),visibleValue:this.getVisibleValue(),selection:this.getSelection()}}},{key:"getValue",value:function(){return this._value}},{key:"setReformat",value:function(e){this._reformat=e,this.setValue(this._value)}},{key:"getMaskedValue",value:function(){return this._maskedValue}},{key:"getVisibleValue",value:function(){return this._visibleValue}},{key:"setMaskChar",value:function(e){if(e.length>1)throw new Error("maskChar must have only 1 char");this._maskChar=e,this.setValue(this._value)}},{key:"setMaskString",value:function(e){if(e&&e.length!==this._mask.length)throw new Error("maskString must have same length as mask");this._maskString=e,this.setValue(this._value)}},{key:"removePreviosOrSelected",value:function(){this.selection.start===this.selection.end&&(this.selection.start=this.selection.end-1,this.selection.start<0&&(this.selection.start=0)),this.input("")}},{key:"removeNextOrSelected",value:function(){this.selection.start===this.selection.end&&this.selection.end++,this.input("")}},{key:"setValue",value:function(e){var t=void 0;if(this._reformat)t=this._reformat({data:e,selection:this.selection});else{var a=e;if(!Array.isArray(a)){a=[];for(var n=0;n<e.length;n++)a.push({char:e[n],type:o.default.USER})}t=(0,r.default)({data:a,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})}this._value=t.value,this._maskedValue=t.maskedValue,this._visibleValue=t.visibleValue,this.setSelection(t.selection)}}]),e}(),u=t.defaults={maskFormat:[{str:"0",regexp:/[0-9]/},{str:"*",regexp:/./},{str:"a",regexp:/[a-zA-Z]/}],maskChar:"",showMask:!1,removeSelectedRange:i.default};t.createInput=function(e){var t=e.value,a=e.maskString,n=e.mask,s=e.reformat,r=e.maskFormat,i=void 0===r?u.maskFormat:r,o=e.maskChar,l=s,d=n;return l||d?l&&(d=null):l=function(e){return e},new c({value:t,mask:d,reformat:l,maskFormat:i,maskChar:void 0===o?u.maskChar:o,maskString:a})}},780:(e,t,a)=>{"use strict";var n,s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(217),i=(n=a(626))&&n.__esModule?n:{default:n},o=function(){function e(t,a){var n=this,s=a.mask,i=void 0===s?r.defaults.mask:s,o=a.value,l=void 0===o?"":o,c=a.reformat,u=a.maskString,d=a.maskChar,m=void 0===d?r.defaults.maskChar:d,h=a.maskFormat,p=void 0===h?r.defaults.maskFormat:h,f=a.showMask,v=a.alwaysShowMask,g=a.onChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showValue=function(){n.showMask&&(n.canSetSelection||n.props.alwaysShowMask)?n.element.value=n.input.getMaskedValue():n.element.value=n.input.getVisibleValue()},this.setSelection=function(){if(n.canSetSelection){var e=n.input.getSelection();n.element.setSelectionRange(e.start,e.end),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,0)})((function(){return n.element.setSelectionRange(e.start,e.end)}))}},this.onPaste=function(e){e.preventDefault(),n.getSelection(),n.input.paste(e.clipboardData.getData("Text")),n.showValue(),setTimeout(n.setSelection,0),n.props.onChange&&n.props.onChange(e)},this.onChange=function(e){var t;t=n.showMask&&(n.canSetSelection||n.props.alwaysShowMask)?n.input.getMaskedValue():n.input.getVisibleValue(),e.target.value!==t&&(n.getSelection(),n.input.setValue(e.target.value),n.showValue(),setTimeout(n.setSelection,0)),n.props.onChange&&n.props.onChange(e)},this.onKeyPress=function(e){e.metaKey||e.altKey||e.ctrlKey||"Enter"===e.key||(e.preventDefault(),n.getSelection(),n.input.input(e.key||e.data||String.fromCharCode(e.which)),n.showValue(),n.setSelection(),n.props.onChange&&n.props.onChange(e))},this.onKeyDown=function(e){8===e.which&&(e.preventDefault(),n.getSelection(),n.input.removePreviosOrSelected(),n.showValue(),n.setSelection(),n.props.onChange&&n.props.onChange(e)),46===e.which&&(e.preventDefault(),n.getSelection(),n.input.removeNextOrSelected(),n.showValue(),n.setSelection(),n.props.onChange&&n.props.onChange(e))},this.onFocus=function(){n.canSetSelection=!0},this.onBlur=function(){n.canSetSelection=!1},this.input=this.input=(0,r.createInput)({value:l,reformat:c,maskString:u,maskChar:m,mask:i,maskFormat:p}),this.props={mask:i,value:l,reformat:c,maskChar:m,maskFormat:p,maskString:u,showMask:f,alwaysShowMask:v,onChange:g},this.showMask=v||f,this.element=t,this.showValue(),this.subscribe()}return s(e,[{key:"getSelection",value:function(){this.input.setSelection({start:this.element.selectionStart,end:this.element.selectionEnd})}},{key:"subscribe",value:function(){this.unsubscribe={onPaste:(0,i.default)(this.element,"paste",this.onPaste),onKeyDown:(0,i.default)(this.element,"keydown",this.onKeyDown),onKeyPress:(0,i.default)(this.element,this.keyPressPropName(),this.onKeyPress),onChange:(0,i.default)(this.element,"change",this.onChange),onFocus:(0,i.default)(this.element,"focus",this.onFocus),onBlur:(0,i.default)(this.element,"blur",this.onBlur)}}},{key:"keyPressPropName",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent.match(/Android/i)?"beforeinput":"keypress"}},{key:"setProps",value:function(e){var t=e.mask,a=e.value,n=e.reformat,s=e.maskString,r=e.maskChar,i=e.maskFormat,o=e.showMask,l=e.alwaysShowMask,c=e.onChange,u=!1;this.props.onChange!==c&&(this.props.onChange=c),this.props.alwaysShowMask===l&&this.props.showMask===o||(this.showMask=l||o,this.props.alwaysShowMask=l,this.props.showMask=o,u=!0),i&&i!==this.props.maskFormat&&(this.input.setMaskFormat(i),this.props.maskFormat=i,u=!0),t!==this.props.mask&&(this.input.setMask(t),this.props.mask=t,u=!0),s!==this.props.maskString&&(this.input.setMaskString(s),this.props.maskString=s,u=!0),r!==this.props.maskChar&&(this.input.setMaskChar(r),this.props.maskChar=r,u=!0),n!==this.props.reformat&&(this.input.setReformat(n),this.props.reformat=n,u=!0),a!==this.props.value&&(this.input.setValue(a),this.props.value=a,u=!0),u&&(this.showValue(),this.setSelection())}},{key:"destroy",value:function(){this.unsubscribe.onPaste(),this.unsubscribe.onKeyDown(),this.unsubscribe.onKeyPress(),this.unsubscribe.onChange(),this.unsubscribe.onFocus(),this.unsubscribe.onBlur()}}]),e}();t.Z=o},379:e=>{"use strict";var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var r={},i=[],o=0;o<e.length;o++){var l=e[o],c=n.base?l[0]+n.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var m=a(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var p=s(h,n);n.byIndex=o,t.splice(o,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function s(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,s){var r=n(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var o=a(r[i]);t[o].references--}for(var l=n(e,s),c=0;c<r.length;c++){var u=a(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{"use strict";e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var s=void 0!==a.layer;s&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,s&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},626:e=>{!function(){"use strict";function t(e,t,a,n){var s="removeEventListener",r=function(){e[s](t,a)};return e.addEventListener?(e.addEventListener(t,a,n),r):e.attachEvent?(t="on"+t,e.attachEvent(t,a),s="detachEvent",r):e.on?(e.on(t,a),s="off",r):void 0}t.define=function(e,t){return function(a,n,s,r){return a[e](n,s,r),function(){a[t](n,s)}}},e.exports=t}()},619:()=>{const e=document.querySelectorAll(".dropdown:not(.is-hoverable)");function t(){e.forEach((function(e){e.classList.remove("is-active")}))}e.length>0&&(e.forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("is-active")}))})),document.addEventListener("click",(function(e){t()}))),document.addEventListener("keydown",(function(e){let a=e||window.event;"Esc"!==a.key&&"Escape"!==a.key||t()}))},72:()=>{for(var e=function(e){e.preventDefault(),e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},t=document.getElementsByClassName("buy"),a=0;a<t.length;a++)t[a].addEventListener("click",e,!1)},514:()=>{const e=document.querySelector("#file-js-example input[type=file]");e.onchange=()=>{e.files.length>0&&(document.querySelector("#file-js-example .file-name").textContent=e.files[0].name)}}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};a.r(e);var t=a(379),n=a.n(t),s=a(795),r=a.n(s),i=a(569),o=a.n(i),l=a(565),c=a.n(l),u=a(216),d=a.n(u),m=a(589),h=a.n(m),p={};function f(e,t,a=""){var n=new Headers;return a&&n.append("Content-Type",a),async e=>{const a=await fetch(t,{method:"POST",body:e,headers:n});if(!a.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await a.text()}}function v(e,t){if(0===e.length)return!0;for(let a=0;a<t;++a)if(!e[a].value)return!1;return!0}function g(e,t="success"){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:t,text:e})}function k(e){let t=window.location.origin+window.location.pathname;return e.filter((e=>e.page===t.split("/").pop()))}function y(e,t){let a=JSON.parse(e);for(;t.firstChild;)t.firstChild.remove();for(let e=0;e<a.length;e++){let n=document.createElement("div");n.classList.add("column"),n.classList.add("is-one-quarter"),n.classList.add("game"),n.innerHTML+='\n                    <div class="game-cover">\n                        <div class="buy" id="'+a[e].id+'">\n                            <span class="icon">\n                                <ion-icon name="cart-outline"></ion-icon>\n                            </span>\n                            Добавить в корзину\n                        </div>\n                        <figure class=\'image is-full\'>\n                            <img src="images/administrator/'+a[e].cover_game+'" alt='+a[e].name_game+'>\n                        </figure>\n                    </div>\n                    <div class="game-description">\n                        <div class="game-title">\n                            '+a[e].name_game+'\n                        </div>\n                        <div class="game-company">\n                            '+a[e].company.name_company+'\n                        </div>\n                        <div class="game-price">\n                            '+a[e].base_price+' &#x20bd\n                            <span class="discount">-'+a[e].tax+"%</span>\n                        </div>\n                    </div>",t.append(n)}}p.styleTagTransform=h(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d(),n()(e.default,p),e.default&&e.default.locals&&e.default.locals,document.addEventListener("DOMContentLoaded",(()=>{let e=k([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]).shift();const t=f(FormData,e.action);document.querySelectorAll("form").forEach((a=>{a.addEventListener("submit",(function(n){let s=function(){let e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll("textarea"),a=v(e,e.length),n=v(t,t.length);return!(!a||!n)}();n.preventDefault();const r=new FormData(this);var i;0==s?g("Не все данные введены","error"):t(r).then((t=>{""==t.trim()?g(e.message):g(e.message_error,"error"),function(e,t){e.reset(),document.getElementById("file").value="",document.querySelector("#file-js-example .file-name").textContent="Ничего не добавлено"}(a)})).catch((e=>console.error(e))),setTimeout(void((i=e.redirect)&&window.setTimeout((function(){window.location=i}),2e3)),2e3)}))}))}));let w=document.getElementById("dashboard");document.getElementById("selector-games").addEventListener("change",(function(){g("Загружаем игры...","info"),f(this.value,"selector","application/x-www-form-urlencoded")(this.value).then((e=>{y(e,w)})).catch((e=>{console.log(e)}))}));let S=document.getElementById("dashboard");document.getElementById("selector-genres").addEventListener("change",(function(){g("Загружаем игры...","info"),f(this.value,"selector-genres","application/x-www-form-urlencoded")(this.value).then((e=>{y(e,S)})).catch((e=>{console.log(e)}))}));let _=document.getElementById("dashboard");document.getElementById("selector-companies").addEventListener("change",(function(){g("Загружаем игры...","info"),f(this.value,"selector-companies","application/x-www-form-urlencoded")(this.value).then((e=>{y(e,_)})).catch((e=>{console.log(e)}))}));var b=a(780),C=document.getElementById("enterToAccount");function E(e){const t=JSON.parse(localStorage.getItem("steamCart")).filter((t=>t.id!==e));localStorage.setItem("steamCart",JSON.stringify(t))}C&&(C.onclick=function(){Swal.fire({title:"Войти в аккаунт",html:'<a href="/register" class="register-link">или зарегистрироваться</a><input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><input id="password" type="password" class="auth-field" placeholder="Пароль">',preConfirm:()=>[document.getElementById("phone").value,document.getElementById("password").value],backdrop:'\n            rgba(18,97,199,0.4)\n            url("/images/nyan-cat.gif")\n            left top\n            no-repeat\n          ',background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Войти"}),new b.Z(document.querySelector(".input-selector"),{mask:"+(000)-00-00-000",alwaysShowMask:!0,maskChar:"_"})});var M=document.getElementById("briefCart");function x(){if(M){let e=JSON.parse(localStorage.getItem("steamCart")),t={header:"application/x-www-form-urlencoded"},a=document.getElementById("cartContent"),n=document.createElement("div");n.classList.add("cart-products");let s=document.createElement("div");s.classList.add("product-in-cart");let r=document.createElement("div");if(r.classList.add("product-in-cart__final-price"),!e.length){let e=document.createElement("div");e.classList.add("empty-cart"),e.innerHTML="<div style='text-align: center;'>Корзина пустая :(</div>",a.append(e)}let i=0,o="cart/brief",l=[];e.forEach((e=>{l.push(parseInt(e.id))})),f(0,o,t.header)(l).then((t=>{JSON.parse(t).forEach(((t,o)=>{i+=e[o].count*t.price,s.innerHTML+="<div class='product-in-cart__title'>"+t.name_game+"<span class='product-in-cart__count'>(x"+e[o].count+")</span><div class='product-in-cart__price'>"+t.price+"<label class='product-in-cart__delete' data-el='"+e[o].id+"' id='"+e[o].id+"'>удалить</label></div></div>",r.innerHTML="<div class='product-in-cart__price'>Финальная цена: "+i+"</div><div class='arange'><a href='/basket'>Оформить</a></div>",n.append(s),n.append(r),a.append(n)}))})).catch((e=>{console.log(e)})),setTimeout(V,1e3)}}function V(){[...document.getElementsByClassName("product-in-cart__delete")].forEach((e=>e.addEventListener("click",(e=>{E(e.target.getAttribute("data-el"));let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),x()}))))}let L;document.getElementById("briefCart").addEventListener("click",(function(e){let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),x()})),document.querySelectorAll(".buy").forEach((e=>e.addEventListener("click",(()=>function(e){if((async()=>{const e=await fetch("get_auth",{method:"POST"});if(!e.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await e.text()})().then((e=>{e.length||(g("Вы не авторизованы","error"),L=0)})).catch((e=>console.error(e))),null!=L)return!1;let t=JSON.parse(localStorage.getItem("steamCart"))||[],a=t.find((t=>t.id===e));a?a.count=a.count+1:(a={id:e,count:1},t.push(a)),localStorage.setItem("steamCart",JSON.stringify(t)),x(),g("Товар под номером "+e+" в корзине")}(e.id)))));let T=k([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]);if(T.length){let e=document.createElement("div");e.classList.add("basket-products");let t=document.createElement("div"),a=document.getElementById("basket"),n=document.getElementById("cart-data"),s=0,r=0,i=[],o=T.shift(),l=JSON.parse(localStorage.getItem("steamCart"));l.length||window.setTimeout((function(){window.location="/"}),500),l.forEach((e=>{i.push(parseInt(e.id))})),f(0,o.action,o.header)(i).then((i=>{JSON.parse(i).forEach(((t,n)=>{s+=l[n].count*t.base_price,r+=l[n].count,e.innerHTML+="<div class='product-in-cart__image'><img src='images/administrator/"+t.cover_game+"' alt='"+t.name_game+"'></div><div class='product-in-cart__description'><h2 class='<h2'>"+t.name_game+"</h2><div class='product-in-cart__company-information'>"+t.company.name_company+"</div><div class='product-in-cart__price-information'>"+t.base_price+" &#x20bd<span>(x"+l[n].count+")</span><span class='discount'>"+t.tax.tax+" %</span></div><div class='product-in-cart__product-categories'><ul class='column is-12'><li>"+t.genre.name_genre+"</li></ul></div><div class='product-in-cart__delete-from-cart'><a class='delete-link' data-el='"+l[n].id+"' id='"+l[n].id+"'>удалить из корзины</a></div></div>",a.append(e)})),t.innerHTML+=r+"<br>"+s+"&#x20bd <br>",n.append(t)})).catch((e=>console.error(e))),setTimeout((function(){[...document.getElementsByClassName("delete-link")].forEach((e=>e.addEventListener("click",(e=>{E(e.target.getAttribute("data-el"));let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),x(),window.setTimeout((function(){window.location="/basket"}),500)}))))}),1e3)}a(619),a(72),a(514)})()})();