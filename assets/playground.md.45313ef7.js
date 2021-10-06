var e=Object.defineProperty,i=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(i,t,r)=>t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,o=(e,i)=>{for(var t in i||(i={}))a.call(i,t)&&l(e,t,i[t]);if(r)for(var t of r(i))s.call(i,t)&&l(e,t,i[t]);return e},n=(e,r)=>i(e,t(r));import{r as u,g as c,b as d,d as m,e as p,f as h,w as g,_ as y,c as b,o as f,h as v,i as V,j as F,k as x,n as D,l as S,t as E,m as w,p as O,q as N,s as R,u as C,v as I,F as $,x as M,y as A,z as G,A as P,B as k}from"./app.85607512.js";const U=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),L=e=>e.replace(/^0+(0$|[^0])/,"$1"),_=(e,i)=>(e.match(new RegExp(U(i),"g"))||[]).length,j=(e,i)=>e.substring(0,e.indexOf(i));var z,T;(T=z||(z={})).symbol="symbol",T.narrowSymbol="narrowSymbol",T.code="code",T.name="name",T.hidden="hidden";const B=[",",".","٫"];class H{constructor(e){const{currency:i,currencyDisplay:t,locale:r,precision:a}=e;this.currencyDisplay=t!==z.hidden?t:void 0;const s=new Intl.NumberFormat(r,{currency:i,currencyDisplay:this.currencyDisplay,style:"currency"}),l=s.format(123456);this.locale=r,this.currency=i,this.digits=[0,1,2,3,4,5,6,7,8,9].map((e=>e.toLocaleString(r))),this.decimalSymbol=_(l,this.digits[0])?l.substr(l.indexOf(this.digits[6])+1,1):void 0,this.groupingSymbol=l.substr(l.indexOf(this.digits[3])+1,1),this.minusSymbol=j(Number(-1).toLocaleString(r),this.digits[1]),void 0===this.decimalSymbol?this.minimumFractionDigits=this.maximumFractionDigits=0:void 0!==a?this.minimumFractionDigits=this.maximumFractionDigits=a:(this.minimumFractionDigits=s.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=s.resolvedOptions().maximumFractionDigits),this.prefix=j(l,this.digits[1]),this.negativePrefix=j(s.format(-1),this.digits[1]),this.suffix=l.substring(l.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[6])+1)}parse(e){if(e){const i=this.isNegative(e);e=this.normalizeDigits(e),e=this.stripCurrencySymbol(e,i),e=this.stripMinusSymbol(e);const t=this.decimalSymbol?`(?:${U(this.decimalSymbol)}(\\d*))?`:"",r=this.stripGroupingSeparator(e).match(new RegExp(`^(0|[1-9]\\d*)${t}$`));if(r&&this.isValidIntegerFormat(this.decimalSymbol?e.split(this.decimalSymbol)[0]:e,Number(r[1])))return Number(`${i?"-":""}${this.onlyDigits(r[1])}.${this.onlyDigits(r[2]||"")}`)}return null}isValidIntegerFormat(e,i){const t={style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0};return[this.stripCurrencySymbol(this.normalizeDigits(i.toLocaleString(this.locale,n(o({},t),{useGrouping:!0}))),!1),this.stripCurrencySymbol(this.normalizeDigits(i.toLocaleString(this.locale,n(o({},t),{useGrouping:!1}))),!1)].includes(e)}format(e,i={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return null!=e?e.toLocaleString(this.locale,o({style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay},i)):""}toFraction(e){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(e.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(e){return!!this.normalizeDigits(this.stripGroupingSeparator(e)).match(new RegExp(`^(0|[1-9]\\d*)${U(this.decimalSymbol)}$`))}isNegative(e){return e.startsWith(this.negativePrefix)||e.replace("-",this.minusSymbol).startsWith(this.minusSymbol)}insertCurrencySymbol(e,i){return`${i?this.negativePrefix:this.prefix}${e}${this.suffix}`}stripGroupingSeparator(e){return e.replace(new RegExp(U(this.groupingSymbol),"g"),"")}stripMinusSymbol(e){return e.replace("-",this.minusSymbol).replace(this.minusSymbol,"")}stripCurrencySymbol(e,i){return e.replace(i?this.negativePrefix:this.prefix,"").replace(this.suffix,"")}normalizeDecimalSeparator(e,i){return B.forEach((t=>{e=e.substr(0,i)+e.substr(i).replace(t,this.decimalSymbol)})),e}normalizeDigits(e){return"0"!==this.digits[0]&&this.digits.forEach(((i,t)=>{e=e.replace(new RegExp(i,"g"),String(t))})),e}onlyDigits(e){return this.normalizeDigits(e).replace(/\D+/g,"")}onlyLocaleDigits(e){return e.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class W{constructor(e){this.currencyFormat=e}}class q extends W{conformToMask(e,i=""){const t=this.currencyFormat.isNegative(e);let r=e;r=this.currencyFormat.stripCurrencySymbol(r,t),r=this.currencyFormat.stripMinusSymbol(r);const a=(e=>{if(""===e&&t&&i!==this.currencyFormat.negativePrefix)return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(e))return e;if(e.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(e)}return null})(r);if(null!=a)return this.currencyFormat.insertCurrencySymbol(a,t);const[s,...l]=r.split(this.currencyFormat.decimalSymbol),o=L(this.currencyFormat.onlyDigits(s)),n=this.currencyFormat.onlyDigits(l.join("")).substr(0,this.currencyFormat.maximumFractionDigits),u=l.length>0&&0===n.length,c=""===o&&t&&(i===e.slice(0,-1)||i!==this.currencyFormat.negativePrefix);return u||c?i:o.match(/\d+/)?{numberValue:Number(`${t?"-":""}${o}.${n}`),fractionDigits:n}:""}}class X extends W{conformToMask(e,i=""){if(""===e||0===this.currencyFormat.parse(i)&&this.currencyFormat.stripCurrencySymbol(i,!0).slice(0,-1)===this.currencyFormat.stripCurrencySymbol(e,!0))return"";const t=this.currencyFormat.isNegative(e),r=""===this.currencyFormat.stripMinusSymbol(e)?-0:Number(`${t?"-":""}${L(this.currencyFormat.onlyDigits(e))}`)/Math.pow(10,this.currencyFormat.minimumFractionDigits);return{numberValue:r,fractionDigits:r.toFixed(this.currencyFormat.minimumFractionDigits).slice(-this.currencyFormat.minimumFractionDigits)}}}const J={locale:void 0,currency:void 0,currencyDisplay:void 0,exportValueAsInteger:!1,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,autoSign:!0,useGrouping:!0};class Y{constructor(e,i){this.el=e,this.numberValue=null,this.addEventListener(),this.init(i),this.setValue(this.currencyFormat.parse(this.el.value))}setOptions(e){this.init(e),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.options.exportValueAsInteger&&null!=this.numberValue?this.toInteger(this.numberValue):this.numberValue,formatted:this.formattedValue}}setValue(e){const i=this.options.exportValueAsInteger&&null!=e?this.toFloat(e):e;i!==this.numberValue&&this.applyFixedFractionFormat(i)}dispatchEvent(e){this.el.dispatchEvent(new CustomEvent(e,{detail:this.getValue()}))}init(e){this.options=o(o({},J),e),this.options.autoDecimalDigits?(this.options.hideNegligibleDecimalDigitsOnFocus=!1,this.el.setAttribute("inputmode","numeric")):this.el.setAttribute("inputmode","decimal"),this.currencyFormat=new H(this.options),this.numberMask=this.options.autoDecimalDigits?new X(this.currencyFormat):new q(this.currencyFormat),this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var e,i;let t=this.toFloat(-Number.MAX_SAFE_INTEGER);return void 0!==(null==(e=this.options.valueRange)?void 0:e.min)&&(t=Math.max(null==(i=this.options.valueRange)?void 0:i.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&t<0&&(t=0),t}getMaxValue(){var e,i;let t=this.toFloat(Number.MAX_SAFE_INTEGER);return void 0!==(null==(e=this.options.valueRange)?void 0:e.max)&&(t=Math.min(null==(i=this.options.valueRange)?void 0:i.max,this.toFloat(Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&t<0&&(t=this.toFloat(Number.MAX_SAFE_INTEGER)),t}toFloat(e){return e/Math.pow(10,this.currencyFormat.maximumFractionDigits)}toInteger(e){return Number(e.toFixed(this.currencyFormat.maximumFractionDigits).split(".").join(""))}validateValueRange(e){return null!=e?Math.min(Math.max(e,this.minValue),this.maxValue):e}applyFixedFractionFormat(e,i=!1){this.format(this.currencyFormat.format(this.validateValueRange(e))),(e!==this.numberValue||i)&&this.dispatchEvent("change")}format(e,i=!1){if(null!=e){void 0!==this.decimalSymbolInsertedAt&&(e=this.currencyFormat.normalizeDecimalSeparator(e,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const t=this.numberMask.conformToMask(e,this.formattedValue);let r;if("object"==typeof t){const{numberValue:e,fractionDigits:a}=t;let{maximumFractionDigits:s,minimumFractionDigits:l}=this.currencyFormat;this.focus?l=i?a.replace(/0+$/,"").length:Math.min(s,a.length):!Number.isInteger(e)||this.options.autoDecimalDigits||void 0!==this.options.precision&&0!==l||(l=s=0),r=e>this.toInteger(Math.abs(e))?this.formattedValue:this.currencyFormat.format(e,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:l,maximumFractionDigits:s})}else r=t;this.options.autoSign&&(this.maxValue<=0&&!this.currencyFormat.isNegative(r)&&0!==this.currencyFormat.parse(r)&&(r=r.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(r=r.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix))),(this.options.currencyDisplay===z.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(r=r.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSymbol).replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=r,this.numberValue=this.currencyFormat.parse(r)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.dispatchEvent("input")}addEventListener(){this.el.addEventListener("input",(e=>{if(!e.detail){const{value:i,selectionStart:t}=this.el,r=e;if(t&&r.data&&B.includes(r.data)&&(this.decimalSymbolInsertedAt=t-1),this.format(i),this.focus&&null!=t){const e=()=>{const{prefix:e,suffix:r,decimalSymbol:a,maximumFractionDigits:s,groupingSymbol:l}=this.currencyFormat;let o=i.length-t;const n=this.formattedValue.length;if(this.formattedValue.substr(t,1)===l&&_(this.formattedValue,l)===_(i,l)+1)return n-o-1;if(n<o)return t;if(void 0!==a&&-1!==i.indexOf(a)){const e=i.indexOf(a)+1;if(Math.abs(n-i.length)>1&&t<=e)return this.formattedValue.indexOf(a)+1;!this.options.autoDecimalDigits&&t>e&&this.currencyFormat.onlyDigits(i.substr(e)).length-1===s&&(o-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===z.hidden?n-o:Math.max(n-Math.max(o,r.length),e.length)};this.setCaretPosition(e())}}}),{capture:!0}),this.el.addEventListener("focus",(()=>{this.focus=!0,setTimeout((()=>{const{value:e,selectionStart:i,selectionEnd:t}=this.el;if(this.format(e,this.options.hideNegligibleDecimalDigitsOnFocus),null!=i&&null!=t&&Math.abs(i-t)>0)this.setCaretPosition(0,this.el.value.length);else if(null!=i){const t=()=>{const{prefix:t,suffix:r,groupingSymbol:a}=this.currencyFormat;if(!this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==z.hidden){if(i>=e.length-r.length)return this.formattedValue.length-r.length;if(i<t.length)return t.length}let s=i;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==z.hidden&&(s-=t.length),this.options.hideGroupingSeparatorOnFocus&&(s-=_(e.substring(0,i),a)),s};this.setCaretPosition(t())}}))})),this.el.addEventListener("blur",(()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue)})),this.el.addEventListener("change",(e=>{e.detail||this.dispatchEvent("change")}),{capture:!0})}setCaretPosition(e,i=e){this.el.setSelectionRange(e,i)}}const K=h({name:"CurrencyInput",props:{modelValue:{type:Number,default:null},options:{type:Object,required:!0}},setup(e){const{inputRef:i,formattedValue:t,setOptions:r,setValue:a}=(e=>{var i;let t,r;const a=u(null),s=u(null),l=c();if(null==l)throw new Error;const o=(e,i)=>l.emit(e,i),n=null==(i=l.attrs.modelModifiers)?void 0:i.lazy,h=d((()=>l.props.modelValue)),g=n?"update:modelValue":"change",y=!!l.attrs["onUpdate:modelValue"]&&!n,b=n||!!l.attrs.onChange,f=e=>{e.detail&&(h.value!==e.detail.number&&o("update:modelValue",e.detail.number),s.value=e.detail.formatted)},v=e=>{e.detail&&(o(g,e.detail.number),s.value=e.detail.formatted)};return m((()=>{if(a.value){if(r="$el"in a.value?"input"===(i=a.value.$el).tagName.toLowerCase()?i:i.querySelector("input"):a.value,null==r)throw new Error("No input element found");t=new Y(r,e),y&&r.addEventListener("input",f),b&&r.addEventListener("change",v),t.setValue(h.value)}var i})),p((()=>{y&&r.removeEventListener("input",f),b&&r.removeEventListener("change",v)})),{inputRef:a,formattedValue:s,setValue:e=>t.setValue(e),setOptions:e=>t.setOptions(e)}})(e.options);return g((()=>e.options),(e=>{r(e)})),g((()=>e.modelValue),(e=>{a(e)})),{inputRef:i}}}),Z={ref:"inputRef",type:"text"};var Q=y(K,[["render",function(e,i,t,r,a,s){return f(),b("input",Z,null,512)}]]);const ee={name:"Dialog",props:{modelValue:Boolean},emits:["update:modelValue"]},ie={class:"max-w-md md:relative m-auto p-8 bg-white rounded w-full h-auto shadow"};var te=y(ee,[["render",function(e,i,t,r,a,s){return t.modelValue?(f(),b("div",{key:0,class:"w-screen h-screen fixed z-50 inset-0 flex bg-gray-600 bg-opacity-50",onClick:i[0]||(i[0]=F((i=>e.$emit("update:modelValue",!1)),["self"]))},[v("div",ie,[V(e.$slots,"default")])])):x("v-if",!0)}]]);const re=h({name:"Switch",props:{modelValue:Boolean},emits:["update:modelValue"]}),ae=["aria-checked"];var se=y(re,[["render",function(e,i,t,r,a,s){return f(),b("div",{tabindex:"0",role:"checkbox","aria-checked":e.modelValue,class:"transition-all cursor-pointer flex justify-between items-center rounded-full focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ring-offset-1",onKeydown:i[0]||(i[0]=S(F((i=>e.$emit("update:modelValue",!e.modelValue)),["prevent"]),["space"])),onClick:i[1]||(i[1]=i=>e.$emit("update:modelValue",!e.modelValue))},[v("div",{class:D(["w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out",{"bg-primary":e.modelValue}])},[v("div",{class:D(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-4":e.modelValue}])},null,2)],2)],40,ae)}]]);const le={name:"OptionSection",components:{Switch:se},props:{label:{type:String,required:!0},description:{type:String,default:void 0},modelValue:{type:Boolean,default:void 0}},emits:["update:modelValue"]},oe={class:"mb-12 min-w-0"},ne={class:"flex items-center justify-between mb-3"},ue={class:"text-xl font-medium"},ce={key:0,class:"mb-3"};var de=y(le,[["render",function(e,i,t,r,a,s){const l=se;return f(),b("section",oe,[v("div",ne,[v("span",ue,E(t.label),1),void 0!==t.modelValue?(f(),w(l,{key:0,"model-value":t.modelValue,"onUpdate:modelValue":i[0]||(i[0]=i=>e.$emit("update:modelValue",i))},null,8,["model-value"])):x("v-if",!0)]),t.description?(f(),b("div",ce,E(t.description),1)):x("v-if",!0),V(e.$slots,"default")])}]]);const me={name:"Checkbox",props:{modelValue:Boolean,disabled:{type:Boolean,default:!1},label:{type:String,required:!0}},emits:["update:modelValue"]},pe=["checked","disabled"];var he=y(me,[["render",function(e,i,t,r,a,s){return f(),b("label",{class:D(["flex items-center",{"text-gray-300 cursor-not-allowed":t.disabled,"cursor-pointer":!t.disabled}])},[v("input",{checked:t.modelValue,disabled:t.disabled,type:"checkbox",class:"w-5 h-5 mr-2 rounded rounded border-gray-300 shadow-sm disabled:text-gray-300 disabled:cursor-not-allowed not-disabled:text-primary not-disabled:cursor-pointer focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50",onInput:i[0]||(i[0]=i=>e.$emit("update:modelValue",i.target.checked))},null,40,pe),v("span",null,E(t.label),1)],2)}]]);const ge=["max","value"];var ye=y({name:"Slider",props:{modelValue:{type:Number,default:null},max:{type:Number,default:15}},emits:["update:modelValue"]},[["render",function(e,i,t,r,a,s){return f(),b("input",{type:"range",max:t.max,value:t.modelValue,onInput:i[0]||(i[0]=i=>e.$emit("update:modelValue",i.target.value))},null,40,ge)}],["__scopeId","data-v-3aa1880a"]]);const be=h({name:"Demo",components:{Slider:ye,Checkbox:he,OptionSection:de,Dialog:te,CurrencyInput:Q},setup(){const e=O({exportDialogVisible:!1,value:1234.5,localeEnabled:!1,locale:"de-DE",locales:["de-DE","de-CH","en-US","en-IN","nl-NL","sv-SE","fr-FR","es-ES","pt-PT","pt-BR","zh-ZH","ja-JP","ar-SA","fa-IR"],currency:"EUR",currencyDisplay:"symbol",currencies:["EUR","USD","JPY","GBP","BRL","INR","CNY","JPY","SAR","IRR"],currencyDisplays:[{value:"symbol",label:"Symbol"},{value:"narrowSymbol",label:"Narrow symbol"},{value:"code",label:"Code"},{value:"name",label:"Name"},{value:"hidden",label:"Hidden"}],hideCurrencySymbolOnFocus:!0,hideGroupingSeparatorOnFocus:!0,hideNegligibleDecimalDigitsOnFocusEnabled:!0,hideNegligibleDecimalDigitsOnFocus:!0,precisionEnabled:!1,precision:2,valueRangeEnabled:!1,minValue:void 0,maxValue:void 0,autoDecimalDigitsEnabled:!0,autoDecimalDigits:!1,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0,options:d((()=>({locale:e.localeEnabled?e.locale:void 0,currency:e.currency,currencyDisplay:e.currencyDisplay,valueRange:e.valueRangeEnabled?{min:e.minValue,max:e.maxValue}:void 0,precision:e.precisionEnabled?e.precision:void 0,hideCurrencySymbolOnFocus:e.hideCurrencySymbolOnFocus,hideGroupingSeparatorOnFocus:e.hideGroupingSeparatorOnFocus,hideNegligibleDecimalDigitsOnFocus:e.hideNegligibleDecimalDigitsOnFocus,autoDecimalDigits:e.autoDecimalDigits,exportValueAsInteger:e.exportValueAsInteger,autoSign:e.autoSign,useGrouping:e.useGrouping}))),stringifiedOptions:d((()=>R(e.options)))});return g((()=>e.autoDecimalDigits),(i=>{e.hideNegligibleDecimalDigitsOnFocusEnabled=!i,e.hideNegligibleDecimalDigitsOnFocus=!i})),N(e)}}),fe={class:"grid gap-y-4 md:grid-cols-2 md:gap-x-8 items-center my-8"},ve=M(" Number value: "),Ve={class:"ml-2"},Fe={class:"flex items-center justify-between mb-2"},xe=v("span",{class:"text-2xl font-bold"},"Options",-1),De={class:"white--text m-0",style:{margin:"0"}},Se=v("hr",{class:"mb-8"},null,-1),Ee={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8"},we=["disabled"],Oe=["value"],Ne={class:"flex items-center space-x-4"},Re=["disabled"],Ce=v("span",{class:"text-center"},"to",-1),Ie=["disabled"],$e={class:"flex items-center"},Me=["value"];var Ae=y(be,[["render",function(e,i,t,r,a,s){const l=Q,o=te,n=de,u=he,c=ye;return f(),b($,null,[v("div",fe,[C(l,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=i=>e.value=i),options:e.options,class:"block w-full transition-all rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"},null,8,["modelValue","options"]),v("div",null,[ve,v("code",Ve,E(null!=e.value?e.value:"null"),1)])]),v("div",Fe,[xe,v("div",null,[v("button",{class:"transition-all bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-300 rounded shadow focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",onClick:i[1]||(i[1]=i=>e.exportDialogVisible=!0)}," Export "),C(o,{modelValue:e.exportDialogVisible,"onUpdate:modelValue":i[2]||(i[2]=i=>e.exportDialogVisible=i)},{default:I((()=>[v("pre",De,E(e.stringifiedOptions),1)])),_:1},8,["modelValue"])])]),Se,v("div",Ee,[v("div",null,[C(n,{modelValue:e.localeEnabled,"onUpdate:modelValue":i[4]||(i[4]=i=>e.localeEnabled=i),label:"Locale"},{default:I((()=>[A(v("select",{"onUpdate:modelValue":i[3]||(i[3]=i=>e.locale=i),disabled:!e.localeEnabled,class:"cursor-pointer transition-all w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(f(!0),b($,null,P(e.locales,(e=>(f(),b("option",{key:e},E(e),1)))),128))],8,we),[[G,e.locale]])])),_:1},8,["modelValue"]),C(n,{label:"Currency"},{default:I((()=>[A(v("select",{"onUpdate:modelValue":i[5]||(i[5]=i=>e.currency=i),class:"cursor-pointer w-full shadow-sm not-disabled:( rounded-lg text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(f(!0),b($,null,P(e.currencies,(e=>(f(),b("option",{key:e},E(e),1)))),128))],512),[[G,e.currency]])])),_:1}),C(n,{label:"Currency Display",description:"How to display the currency in the formatting."},{default:I((()=>[A(v("select",{"onUpdate:modelValue":i[6]||(i[6]=i=>e.currencyDisplay=i),class:"cursor-pointer w-full shadow-sm not-disabled:( rounded-lg text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(f(!0),b($,null,P(e.currencyDisplays,(e=>(f(),b("option",{key:e.value,value:e.value},E(e.label),9,Oe)))),128))],512),[[G,e.currencyDisplay]])])),_:1}),C(n,{modelValue:e.useGrouping,"onUpdate:modelValue":i[7]||(i[7]=i=>e.useGrouping=i),label:"Use Grouping",description:"Whether to use grouping separators such as thousands/lakh/crore separators."},null,8,["modelValue"]),C(n,{label:"Distraction Free Input",description:"Hide various parts of the formatting on focus for easier input."},{default:I((()=>[C(u,{modelValue:e.hideCurrencySymbolOnFocus,"onUpdate:modelValue":i[8]||(i[8]=i=>e.hideCurrencySymbolOnFocus=i),label:"Hide currency symbol",class:"mb-1"},null,8,["modelValue"]),C(u,{modelValue:e.hideGroupingSeparatorOnFocus,"onUpdate:modelValue":i[9]||(i[9]=i=>e.hideGroupingSeparatorOnFocus=i),label:"Hide grouping separator",class:"mb-1"},null,8,["modelValue"]),C(u,{modelValue:e.hideNegligibleDecimalDigitsOnFocus,"onUpdate:modelValue":i[10]||(i[10]=i=>e.hideNegligibleDecimalDigitsOnFocus=i),disabled:!e.hideNegligibleDecimalDigitsOnFocusEnabled,label:"Hide negligible decimal digits"},null,8,["modelValue","disabled"])])),_:1})]),v("div",null,[C(n,{modelValue:e.autoSign,"onUpdate:modelValue":i[11]||(i[11]=i=>e.autoSign=i),label:"Auto Sign",description:"Whether the minus symbol is automatically inserted or prevented to be inputted depending the current value range."},null,8,["modelValue"]),C(n,{modelValue:e.valueRangeEnabled,"onUpdate:modelValue":i[14]||(i[14]=i=>e.valueRangeEnabled=i),label:"Value Range",description:"The validation is triggered on blur and automatically sets the respective threshold if out of range."},{default:I((()=>[v("div",Ne,[A(v("input",{"onUpdate:modelValue":i[12]||(i[12]=i=>e.minValue=i),disabled:!e.valueRangeEnabled,type:"number",placeholder:"Min",class:"min-w-0 flex-1 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},null,8,Re),[[k,e.minValue,void 0,{number:!0}]]),Ce,A(v("input",{"onUpdate:modelValue":i[13]||(i[13]=i=>e.maxValue=i),disabled:!e.valueRangeEnabled,type:"number",placeholder:"Max",class:"min-w-0 flex-1 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},null,8,Ie),[[k,e.maxValue,void 0,{number:!0}]])])])),_:1},8,["modelValue"]),C(n,{modelValue:e.precisionEnabled,"onUpdate:modelValue":i[16]||(i[16]=i=>e.precisionEnabled=i),label:"Precision",description:"Override the number of displayed decimal digits. Can only be applied for currencies that support decimal digits."},{default:I((()=>[v("div",$e,[C(c,{modelValue:e.precision,"onUpdate:modelValue":i[15]||(i[15]=i=>e.precision=i),modelModifiers:{number:!0},disabled:!e.precisionEnabled},null,8,["modelValue","disabled"]),v("code",{value:e.precision,class:"w-10 ml-4 text-center"},E(e.precision),9,Me)])])),_:1},8,["modelValue"]),C(n,{modelValue:e.autoDecimalDigits,"onUpdate:modelValue":i[17]||(i[17]=i=>e.autoDecimalDigits=i),label:"Auto Decimal Digits",description:"Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits."},null,8,["modelValue"]),C(n,{modelValue:e.exportValueAsInteger,"onUpdate:modelValue":i[18]||(i[18]=i=>e.exportValueAsInteger=i),label:"Export Value As Integer",description:"Whether the number value should be exported as integer instead of a float value depending on the configured precision."},null,8,["modelValue"])])])],64)}]]);const Ge='{"title":"Playground","description":"","frontmatter":{},"relativePath":"playground.md","lastUpdated":1633551515656}',Pe={},ke=v("h1",{id:"playground",tabindex:"-1"},[M("Playground "),v("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#")],-1);var Ue=y(Pe,[["render",function(e,i,t,r,a,s){const l=Ae;return f(),b("div",null,[ke,C(l)])}]]);export{Ge as __pageData,Ue as default};
