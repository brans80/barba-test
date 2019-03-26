!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.barbaPrefetch=i()}(this,function(){var t=window.requestIdleCallback||function(t){var i=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-i))}})},1)},i=function(){this.name="@barba/prefetch",this.version="2.0.1-next.97+33c213b",this.toPrefetch=new Set};return i.prototype.install=function(t,i){void 0===i&&(i={});var e=i.root;void 0===e&&(e=document.body);var n=i.timeout;void 0===n&&(n=2e3),this.barba=t,this.logger=new t.Logger(this.name),this.root=e,this.timeout=n},i.prototype.init=function(){var t=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(i){i.forEach(function(i){if(i.isIntersecting){var e=i.target,n=t.barba.dom.getUrl(e);t.toPrefetch.has(n)&&(t.observer.unobserve(e),t.barba.cache.has(n)||t.barba.cache.set(n,t.barba.request(n,t.barba.timeout,t.barba.t.bind(t,"prefetch"))))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},i.prototype.observe=function(){var i=this;t(function(){i.root.querySelectorAll("a").forEach(function(t){var e=t,n=i.barba.dom.getUrl(e);i.barba.cache.has(n)||i.barba.prevent.checkUrl(n)||i.barba.prevent.checkLink(e,{},e.href)||(i.observer.observe(t),i.toPrefetch.add(n))})},{timeout:this.timeout})},new i});
//# sourceMappingURL=barba-prefetch.umd.js.map