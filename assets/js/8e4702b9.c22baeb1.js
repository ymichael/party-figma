(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[280],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return l},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(i),d=n,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return i?r.createElement(h,a(a({ref:t},l),{},{components:i})):r.createElement(h,a({ref:t},l))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},742:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var r=i(7294),n="demoButton_35cA",o=function(e){var t=e.demoMethod,i=(0,r.useRef)(null);return r.createElement("div",{ref:i,id:t.name,className:n,onClick:function(){return t.call(null,i.current)}},r.createElement("img",{src:"/img/cursor.svg"}))}},4489:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var r=i(3552),n=i(6945),o=i.n(n),a=i(7294),s="demoCodeblock_2Smj",u="background_3s0i",c=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var i=t.prototype;return i.render=function(){return a.createElement("div",{className:s},this.props.children,a.createElement("div",{className:u,onClick:this.clickHandler.bind(this)},a.createElement("p",null,"Click me to try it out!")))},i.clickHandler=function(e){e.persist(),this.props.method(o(),e)},t}(a.Component)},4782:function(e,t,i){"use strict";i.d(t,{p_:function(){return o},Lk:function(){return a},iW:function(){return s}});var r=i(6945),n=i.n(r);function o(e){n().confetti(e)}function a(e){n().sparkles(e)}function s(e){n().resolvableShapes.heart||(n().resolvableShapes.heart='<svg viewBox="0 0 512 512" height="20" width="20"><path d="M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801 C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"/></svg>');var t=n().scene.current.createEmitter({emitterOptions:{loops:1,useGravity:!1},emissionOptions:{rate:0,bursts:[{time:0,count:n().variation.skew(20,10)}],source:e,angle:n().variation.range(0,360),initialSpeed:400,initialColor:n().variation.gradientSample(n().Gradient.simple(n().Color.fromHex("#ffa68d"),n().Color.fromHex("#fd3a84")))},rendererOptions:{shapeFactory:"heart",applyLighting:void 0}});t.addModule(n().modules.RotationOverLifetime).rotation=function(e){return new(n().Vector)(0,0,100).scale(e.initialLifetime-e.lifetime)},t.addModule(n().modules.SizeOverLifetime).size=function(e){return.5+.3*(Math.cos(10*(e.initialLifetime-e.lifetime))+1)}}},6558:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;var r=i(7720),n=function(){function e(e,t,i){this.values=new Float32Array(3),this.rgb=[e,t,i]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(e){this.values[0]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(e){this.values[1]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(e){this.values[2]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(e){this.r=e[0],this.g=e[1],this.b=e[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,i){return void 0===i&&(i=.5),new e(r.lerp(this.r,t.r,i),r.lerp(this.g,t.g,i),r.lerp(this.b,t.b,i))},e.prototype.toHex=function(){var e=function(e){return e.toString(16).padStart(2,"0")};return"#"+e(this.r)+e(this.g)+e(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,i,r){if(t/=360,r/=100,0===(i/=100))return new e(r,r,r);var n=function(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},o=function(e){return Math.min(255,256*e)},a=r<.5?r*(1+i):r+i-r*i,s=2*r-a;return new e(o(n(s,a,t+1/3)),o(n(s,a,t)),o(n(s,a,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();t.Color=n},4369:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Gradient=void 0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,i){return e.mix(t,i)},t.solid=function(e){return new t({value:e,time:.5})},t.simple=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var r=1/(e.length-1);return new(t.bind.apply(t,o([void 0],e.map((function(e,t){return{value:e,time:t*r}})))))},t}(i(1288).Spline);t.Gradient=a},5020:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(6558),t),n(i(4369),t),n(i(8437),t),n(i(8872),t),n(i(3828),t)},8437:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.NumericSpline=void 0;var o=i(7720),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,i){return o.slerp(e,t,i)},t}(i(1288).Spline);t.NumericSpline=a},8872:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Rect=void 0;var i=function(){function e(e,t,i,r){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===r&&(r=0),this.x=e,this.y=t,this.width=i,this.height=r}return e.fromHtmlElement=function(t){var i=t.getBoundingClientRect();return new e(i.x,i.y,i.width,i.height)},e.fromMouseEvent=function(t){return new e(t.clientX,t.clientY)},e.fromScreen=function(){return new e(0,0,window.innerWidth,window.innerHeight)},e}();t.Rect=i},1288:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Spline=void 0;var r=i(7720),n=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Splines require at least one key.");if(Array.isArray(e[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=e}return e.prototype.evaluate=function(e){if(0===this.keys.length)throw new Error("Attempt to evaluate a spline with no keys.");if(1===this.keys.length)return this.keys[0].value;var t=this.keys.sort((function(e,t){return e.time-t.time})),i=t.findIndex((function(t){return t.time>e}));if(0===i)return t[0].value;if(-1===i)return t[t.length-1].value;var n=t[i-1],o=t[i],a=r.invlerp(n.time,o.time,e);return this.interpolate(n.value,o.value,a)},e}();t.Spline=n},3828:function(e,t,i){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var n=i(7720),o=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.values=new Float32Array(3),this.xyz=[e,t,i]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(e){this.values[0]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(e){this.values[1]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(e){this.values[2]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(e){this.values[0]=e[0],this.values[1]=e[1],this.values[2]=e[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return"number"==typeof t?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return 0!==t?this.scale(1/t):new(e.bind.apply(e,r([void 0],this.xyz)))},e.prototype.angle=function(e){return n.rad2deg*Math.acos((this.x*e.x+this.y*e.y+this.z*e.z)/(this.magnitude()*e.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(e){return this.magnitude()*e.magnitude()*Math.cos(n.deg2rad*this.angle(e))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*n.deg2rad),Math.sin(t*n.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();t.Vector=o},9065:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.particleContainer=t.debugContainer=t.rootContainer=void 0;var r=i(7509),n=i(4530);function o(e,t){Object.assign(e.style,t)}function a(e){return e&&e.isConnected}t.rootContainer=new n.Lazy((function(){var e=document.createElement("div");return e.id="party-js-container",o(e,{position:"fixed",left:"0",top:"0",bottom:"0",right:"0",pointerEvents:"none",userSelect:"none",zIndex:r.settings.zIndex.toString()}),document.body.appendChild(e),e}),a),t.debugContainer=new n.Lazy((function(){var e=document.createElement("div");return e.id="party-js-debug",o(e,{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"}),t.rootContainer.current.appendChild(e),e}),a),t.particleContainer=new n.Lazy((function(){var e=document.createElement("div");return e.id="party-js-particles",o(e,{width:"100%",height:"100%",perspective:"100vw"}),t.rootContainer.current.appendChild(e),e}),a)},5915:function(e,t,i){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Debug=void 0;var n=i(9065),o=i(7509),a=function(){function e(e){this.scene=e,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(e){var t=n.debugContainer.current,i=o.settings.debug?"block":"none";t.style.display!==i&&(t.style.display=i),o.settings.debug&&(this.refreshTimer+=e,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,t.innerHTML=this.getDebugInformation(e).join("<br>")))},e.prototype.getDebugInformation=function(e){var t=this.scene.emitters.length,i=this.scene.emitters.reduce((function(e,t){return e+t.particles.length}),0),n=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/e),"Emitters: "+t,"Particles: "+i],o=this.scene.emitters.map((function(e,t){return"Emitter #"+(t+1)+" ("+["\u03a3p: "+e.particles.length,"\u03a3t: "+e.durationTimer.toFixed(3)+"s"].join(", ")+")"}));return n.push.apply(n,r(["--------------"],o)),n},e}();t.Debug=a},6945:function(e,t,i){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=i(5020),o=i(8232),a=i(1855),s=i(5356),u=i(3120),c=i(7509),l=i(4182),p=i(7720),f=i(7219),d=i(4123),h=i(6922),v=i(3012),y=i(3644),m=new y.Lazy((function(){if("undefined"==typeof document||"undefined"==typeof window)throw new Error("It seems like you are trying to run party.js in a non-browser environment, which is not supported.");return new u.Scene})),g=r(r(r(r({},n),v),l),{scene:m,settings:c.settings,Particle:s.Particle,Emitter:o.Emitter,variation:h,modifier:f,modules:a,random:d,math:p,util:y,forceInitialize:function(){m.current}});t.default=g},8232:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Emitter=void 0;var r=i(3828),n=i(7509),o=i(4123),a=i(6922),s=i(6814),u=i(6755),c=i(5356),l=function(){function e(e){this.particles=[],this.modules=[],this.currentLoop=0,this.durationTimer=0,this.emissionTimer=0,this.attemptedBurstIndices=[],this.options=s.overrideDefaults(u.getDefaultEmitterOptions(),null==e?void 0:e.emitterOptions),this.emission=s.overrideDefaults(u.getDefaultEmissionOptions(),null==e?void 0:e.emissionOptions),this.renderer=s.overrideDefaults(u.getDefaultRendererOptions(),null==e?void 0:e.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),e.prototype.addModule=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=new e(t);return this.modules.push(r),r},e.prototype.tick=function(e){if(!this.isExpired){if(this.durationTimer+=e,this.durationTimer>=this.options.duration){if(this.currentLoop++,this.isExpired)return;this.durationTimer=0,this.attemptedBurstIndices=[]}for(var t=0,i=0,r=this.emission.bursts;i<r.length;i++){var n=r[i];if(n.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(t)){for(var o=a.evaluateVariation(n.count),s=0;s<o;s++)this.emitParticle();this.attemptedBurstIndices.push(t)}t++}this.emissionTimer+=e;for(var u=1/this.emission.rate;this.emissionTimer>u;)this.emissionTimer-=u,this.emitParticle();var c=function(t){var i=l.particles[t];l.tickParticle(i,e),l.options.despawningRules.some((function(e){return e(i)}))&&l.particles.splice(t,1)},l=this;for(s=this.particles.length-1;s>=0;s--)c(s)}},e.prototype.tickParticle=function(e,t){e.lifetime-=t,this.options.useGravity&&(e.velocity=e.velocity.add(r.Vector.up.scale(n.settings.gravity*t))),e.location=e.location.add(e.velocity.scale(t));for(var i=0,o=this.modules;i<o.length;i++){o[i].apply(e)}},e.prototype.emitParticle=function(){var e=new c.Particle({location:o.randomInsideSource(this.emission.source),lifetime:a.evaluateVariation(this.emission.initialLifetime),velocity:r.Vector.from2dAngle(a.evaluateVariation(this.emission.angle)).scale(a.evaluateVariation(this.emission.initialSpeed)),size:a.evaluateVariation(this.emission.initialSize),rotation:a.evaluateVariation(this.emission.initialRotation),color:a.evaluateVariation(this.emission.initialColor)});return this.particles.push(e),this.particles.length>this.options.maxParticles&&this.particles.shift(),e},e}();t.Emitter=l},5563:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.ColorBySize=void 0;var o=i(5020),a=i(7219),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.color=o.Color.white,t}return n(t,e),t.prototype.apply=function(e){e.color=a.evaluateModifierViaSize(this.color,e)},t}(i(3032).ParticleModifierModule);t.ColorBySize=s},8206:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.ColorOverLifetime=void 0;var o=i(5020),a=i(7219),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.color=o.Color.white,t}return n(t,e),t.prototype.apply=function(e){e.color=a.evaluateModifierViaLifetime(this.color,e)},t}(i(3032).ParticleModifierModule);t.ColorOverLifetime=s},8415:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.CustomModifier=void 0;var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.modifier=void 0,t}return n(t,e),t.prototype.apply=function(e){this.modifier&&this.modifier(e)},t}(i(3032).ParticleModifierModule);t.CustomModifier=o},1855:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(5563),t),n(i(8206),t),n(i(8415),t),n(i(4774),t),n(i(4447),t),n(i(6943),t)},4774:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.OpacityOverLifetime=void 0;var o=i(7219),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.opacity=1,t}return n(t,e),t.prototype.apply=function(e){e.opacity=o.evaluateModifierViaLifetime(this.opacity,e)},t}(i(3032).ParticleModifierModule);t.OpacityOverLifetime=a},3032:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParticleModifierModule=void 0;var i=function(){};t.ParticleModifierModule=i},4447:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.RotationOverLifetime=void 0;var o=i(5020),a=i(7219),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rotation=o.Vector.zero,t}return n(t,e),t.prototype.apply=function(e){e.rotation=e.initialRotation.add(a.evaluateModifierViaLifetime(this.rotation,e))},t}(i(3032).ParticleModifierModule);t.RotationOverLifetime=s},6943:function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.SizeOverLifetime=void 0;var o=i(7219),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.size=1,t}return n(t,e),t.prototype.apply=function(e){e.size=e.initialSize*o.evaluateModifierViaLifetime(this.size,e)},t}(i(3032).ParticleModifierModule);t.SizeOverLifetime=a},4830:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmissionOptions=void 0;var r=i(5020);t.getDefaultEmissionOptions=function(){return{rate:10,angle:0,bursts:[],source:new r.Rect,initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:r.Vector.zero,initialColor:r.Color.white}}},8851:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmitterOptions=void 0;var r=i(6683);t.getDefaultEmitterOptions=function(){return{duration:5,loops:-1,useGravity:!0,maxParticles:300,despawningRules:[r.despawningRules.lifetime,r.despawningRules.bounds]}}},6755:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(8851),t),n(i(4830),t),n(i(6753),t)},6753:function(e,t){"use strict";function i(e,t){var i=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=i;break;case"svg":t.style.fill=t.style.color=i;break;default:t.style.color=i}}function r(e,t){t.style.opacity=e.toString()}function n(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function o(e,t){t.style.transform="translateX("+e.location.x.toFixed(3)+"px) translateY("+e.location.y.toFixed(3)+"px) translateZ("+e.location.z.toFixed(3)+"px) rotateX("+e.rotation.x.toFixed(3)+"deg) rotateY("+e.rotation.y.toFixed(3)+"deg) rotateZ("+e.rotation.z.toFixed(3)+"deg) scale("+e.size.toFixed(3)+")"}Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultRendererOptions=void 0,t.getDefaultRendererOptions=function(){return{shapeFactory:"square",applyColor:i,applyOpacity:r,applyLighting:n,applyTransform:o}}},5356:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Particle=void 0;var r=i(5020),n=i(6814),o=function(e){var t=n.overrideDefaults({lifetime:0,size:1,location:r.Vector.zero,rotation:r.Vector.zero,velocity:r.Vector.zero,color:r.Color.white,opacity:1},e);this.id=Symbol(),this.size=this.initialSize=t.size,this.lifetime=this.initialLifetime=t.lifetime,this.rotation=this.initialRotation=t.rotation,this.location=t.location,this.velocity=t.velocity,this.color=t.color,this.opacity=t.opacity};t.Particle=o},4725:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var r=i(3828),n=i(9065),o=i(4182),a=i(3644),s=function(){function e(){this.elements=new Map,this.light=new r.Vector(0,0,1)}return e.prototype.begin=function(){this.renderedParticles=[]},e.prototype.end=function(){for(var e=this.elements.keys(),t=e.next();!t.done;){var i=t.value;this.renderedParticles.includes(i)||(this.elements.get(i).remove(),this.elements.delete(i)),t=e.next()}return this.renderedParticles.length},e.prototype.renderParticle=function(e,t){var i=t.renderer,r=this.elements.has(e.id)?this.elements.get(e.id):this.createParticleElement(e,i);if(i.applyColor&&i.applyColor(e.color,r),i.applyOpacity&&i.applyOpacity(e.opacity,r),i.applyLighting){var n=a.rotationToNormal(e.rotation).dot(this.light);i.applyLighting(n,r)}i.applyTransform&&i.applyTransform(e,r),this.renderedParticles.push(e.id)},e.prototype.createParticleElement=function(e,t){var i=o.resolveShapeFactory(t.shapeFactory).cloneNode(!0);return i.style.position="absolute",this.elements.set(e.id,n.particleContainer.current.appendChild(i)),i},e}();t.Renderer=s},3120:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;var r=i(5915),n=i(8232),o=i(4725),a=function(){function e(){this.emitters=[],this.debug=new r.Debug(this),this.renderer=new o.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return e.prototype.createEmitter=function(e){var t=new n.Emitter(e);return this.emitters.push(t),t},e.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},e.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},e.prototype.tick=function(e){var t=(e-this.lastTickTimestamp)/1e3;try{for(var i=0;i<this.emitters.length;i++){(o=this.emitters[i]).tick(t),o.isExpired&&this.emitters.splice(i--,1)}}catch(c){console.error("An error occurred while updating the scene's emitters:\n\""+c+'"')}try{this.renderer.begin();for(var r=0,n=this.emitters;r<n.length;r++)for(var o=n[r],a=0,s=o.particles;a<s.length;a++){var u=s[a];this.renderer.renderParticle(u,o)}this.renderer.end()}catch(c){console.error("An error occurred while rendering the scene's particles:\n\""+c+'"')}this.debug.tick(t),this.lastTickTimestamp=e,this.scheduleTick()},e}();t.Scene=a},7509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={debug:!1,gravity:800,zIndex:99999}},4182:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveShapeFactory=t.resolvableShapes=void 0;var r=i(6922);t.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'},t.resolveShapeFactory=function(e){var i=r.evaluateVariation(e);if("string"==typeof i){var n=t.resolvableShapes[i];if(!n)throw new Error("Failed to resolve shape key '"+i+"'.");var o=document.createElement("div");return o.innerHTML=n,o.firstElementChild}return i}},7720:function(e,t){"use strict";function i(e,t,i){return(1-i)*e+i*t}Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.clamp=t.invlerp=t.slerp=t.lerp=t.epsilon=t.rad2deg=t.deg2rad=void 0,t.deg2rad=Math.PI/180,t.rad2deg=180/Math.PI,t.epsilon=1e-6,t.lerp=i,t.slerp=function(e,t,r){return i(e,t,(1-Math.cos(r*Math.PI))/2)},t.invlerp=function(e,t,i){return(i-e)/(t-e)},t.clamp=function(e,t,i){return Math.min(i,Math.max(t,e))},t.approximately=function(e,i){return Math.abs(e-i)<t.epsilon}},7219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateModifierViaSize=t.evaluateModifierViaLifetime=void 0,t.evaluateModifierViaLifetime=function(e,t){return"object"==typeof e&&"evaluate"in e?e.evaluate((t.initialLifetime-t.lifetime)/t.lifetime):"function"==typeof e?e(t):e},t.evaluateModifierViaSize=function(e,t){return"object"==typeof e&&"evaluate"in e?e.evaluate(t.size):"function"==typeof e?e(t):e}},4123:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomInsideSource=t.randomInsideRect=t.randomUnitVector=t.pick=t.randomRange=void 0;var r=i(5020),n=i(7720);function o(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),n.lerp(e,t,Math.random())}function a(e){return new r.Vector(e.x+o(0,e.width),e.y+o(0,e.height))}t.randomRange=o,t.pick=function(e){return 0===e.length?void 0:e[Math.floor(Math.random()*e.length)]},t.randomUnitVector=function(){var e=o(0,2*Math.PI),t=o(-1,1);return new r.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)},t.randomInsideRect=a,t.randomInsideSource=function(e){return"getBoundingClientRect"in e?e=r.Rect.fromHtmlElement(e):"clientX"in e&&(e=r.Rect.fromMouseEvent(e)),a(e)}},6922:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gradientSample=t.splineSample=t.skewRelative=t.skew=t.range=t.evaluateVariation=void 0;var r=i(4123);function n(e){return function(){return e.evaluate(Math.random())}}t.evaluateVariation=function(e){return Array.isArray(e)?r.pick(e):"function"==typeof e?e():e},t.range=function(e,t){return function(){return r.randomRange(e,t)}},t.skew=function(e,t){return function(){return e+r.randomRange(-t,t)}},t.skewRelative=function(e,t){return function(){return e*(1+r.randomRange(-t,t))}},t.splineSample=n,t.gradientSample=function(e){return n(e)}},7200:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=void 0;var r=i(6945),n=i(5020),o=i(1855),a=i(4123),s=i(6922),u=i(3644);t.confetti=function(e,t){var i=u.overrideDefaults({count:s.range(20,40),spread:40,speed:s.range(300,600),size:s.skew(1,.2),rotation:function(){return a.randomUnitVector().scale(180)},color:function(){return n.Color.fromHsl(a.randomRange(0,360),100,70)},sizeOverLifetime:function(e){return Math.min(1,3*(e.initialLifetime-e.lifetime))},rotationOverLifetime:function(e){return new n.Vector(140,200,260).scale(e.initialLifetime-e.lifetime)},shapes:["square","circle"]},t),c=r.default.scene.current.createEmitter({emitterOptions:{loops:1,duration:8},emissionOptions:{rate:0,bursts:[{time:0,count:i.count}],source:e,angle:s.skew(-90,s.evaluateVariation(i.spread)),initialLifetime:s.range(6,8),initialSpeed:i.speed,initialSize:i.size,initialRotation:i.rotation,initialColor:i.color},rendererOptions:{shapeFactory:i.shapes}});return c.addModule(o.RotationOverLifetime).rotation=i.rotationOverLifetime,c.addModule(o.SizeOverLifetime).size=i.sizeOverLifetime,c}},3012:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(7200),t),n(i(9801),t)},9801:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sparkles=void 0;var r=i(6945),n=i(5020),o=i(1855),a=i(4123),s=i(6922),u=i(3644);t.sparkles=function(e,t){var i=u.overrideDefaults({count:s.range(10,20),speed:s.range(100,200),size:s.range(.5,1.5),rotation:function(){return new n.Vector(0,0,a.randomRange(0,360))},color:function(){return n.Color.fromHsl(50,100,a.randomRange(55,85))},rotationOverLifetime:function(e){return new n.Vector(0,0,200).scale(e.initialLifetime-e.lifetime)},sizeOverLifetime:new n.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0}),opacityOverLifetime:new n.NumericSpline({time:0,value:1},{time:.5,value:1},{time:1,value:0})},t),c=r.default.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1},emissionOptions:{rate:0,bursts:[{time:0,count:i.count}],source:e,angle:s.range(0,360),initialLifetime:s.range(1,2),initialSpeed:i.speed,initialSize:i.size,initialRotation:i.rotation,initialColor:i.color},rendererOptions:{applyLighting:void 0,shapeFactory:"star"}});return c.addModule(o.RotationOverLifetime).rotation=i.rotationOverLifetime,c.addModule(o.SizeOverLifetime).size=i.sizeOverLifetime,c.addModule(o.OpacityOverLifetime).opacity=i.sizeOverLifetime,c}},6814:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.overrideDefaults=void 0,t.overrideDefaults=function(e,t){return Object.assign({},e,t)}},3644:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(6814),t),n(i(5152),t),n(i(6683),t),n(i(4530),t)},4530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Lazy=void 0;var i=function(){function e(t,i){void 0===i&&(i=e.defaultExists),this.factory=t,this.exists=i}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(e){return void 0!==e},e}();t.Lazy=i},5152:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rotationToNormal=void 0;var r=i(5020),n=i(7720);t.rotationToNormal=function(e){var t=e.x*n.deg2rad,i=e.y*n.deg2rad,o=new r.Vector(Math.cos(i),0,Math.sin(i)),a=new r.Vector(0,Math.cos(t),Math.sin(t));return o.cross(a)}},6683:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.despawningRules=void 0,t.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}}},5926:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a=(i(742),i(4489)),s=(i(4782),{title:"Using Templates"}),u={unversionedId:"guides/using-templates",id:"guides/using-templates",isDocsHomePage:!1,title:"Using Templates",description:"Using templates is the easiest way to get effects playing using the library. Calling them is simple, but some examples are shown here nevertheless.",source:"@site/docs/guides/using-templates.mdx",sourceDirName:"guides",slug:"/guides/using-templates",permalink:"/docs/guides/using-templates",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/guides/using-templates.mdx",version:"current",frontMatter:{title:"Using Templates"},sidebar:"sidebar",previous:{title:"Utilities",permalink:"/docs/ref/utilities"},next:{title:"Custom Effects",permalink:"/docs/guides/custom-effects"}},c=[{value:"Confetti",id:"confetti",children:[]},{value:"Sparkles",id:"sparkles",children:[]}],l={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"templates")," is the easiest way to get effects playing using the library. Calling them is simple, but some examples are shown here nevertheless."),(0,o.kt)("h2",{id:"confetti"},"Confetti"),(0,o.kt)("p",null,"A demonstration of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ref/templates#confetti"},"confetti template"),"."),(0,o.kt)(a.Z,{method:function(e,t){return e.confetti(t,{count:e.variation.range(0,100),size:e.variation.range(.6,1.4)})},mdxType:"DemoCodeblock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const element = document.getElementById("demoConfetti");\nparty.confetti(element, {\n    // Specify further (optional) configuration here.\n    count: party.variation.range(0, 100),\n    size: party.variation.range(0.6, 1.4),\n});\n'))),(0,o.kt)("h2",{id:"sparkles"},"Sparkles"),(0,o.kt)("p",null,"A demonstration of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ref/templates#sparkles"},"sparkles template"),"."),(0,o.kt)(a.Z,{method:function(e,t){return e.sparkles(t,{count:e.variation.range(10,60),speed:e.variation.range(50,300)})},mdxType:"DemoCodeblock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const element = document.getElementById("demoSparkles");\nparty.sparkles(element, {\n    // Specify further (optional) configuration here.\n    count: party.variation.range(10, 60),\n    speed: party.variation.range(50, 300),\n});\n'))))}p.isMDXComponent=!0}}]);