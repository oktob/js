const loadScriptsTimer=setTimeout(loadScripts,5*1300);const userInteractionEvents=[&quot;mouseover&quot;,&quot;keydown&quot;,&quot;touchstart&quot;,&quot;touchmove&quot;,&quot;wheel&quot;];userInteractionEvents.forEach(function(event){window.addEventListener(event,triggerScriptLoader,{passive:!0})});function triggerScriptLoader(){loadScripts();clearTimeout(loadScriptsTimer);userInteractionEvents.forEach(function(event){window.removeEventListener(event,triggerScriptLoader,{passive:!0})})}function loadScripts(){document.querySelectorAll(&quot;script,iframe[data-type=&#39;lazy&#39;]&quot;).forEach(function(elem){elem.setAttribute(&quot;src&quot;,elem.getAttribute(&quot;data-src&quot;))})}
     /*<![CDATA[*/
!function(d,l){function s(){return e.cid||(e.cid=Math.random().toString(36)),e.cid}function i(e,t,o,n,i,r,a){var c="https://www.google-analytics.com/collect",r=function(e){var t,o=[];for(t in e)e.hasOwnProperty(t)&&void 0!==e[t]&&o.push(v(t)+"="+v(e[t]));return o.join("&")}({v:"1",ds:"web",aip:l.anonymizeIp?1:void 0,tid:"UA-141118563-1",cid:s(),t:e||"pageview",sd:l.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:u.referrer||void 0,dt:u.title,dl:u.location.origin+u.location.pathname+u.location.search,ul:l.language?(p.language||"").toLowerCase():void 0,de:l.characterSet?u.characterSet:void 0,sr:l.screenSize?(d.screen||{}).width+"x"+(d.screen||{}).height:void 0,vp:l.screenSize&&d.visualViewport?(d.visualViewport||{}).width+"x"+(d.visualViewport||{}).height:void 0,ec:t||void 0,ea:o||void 0,el:n||void 0,ev:i||void 0,exd:r||void 0,exf:void 0!==a&&0==!!a?0:void 0});p.sendBeacon?p.sendBeacon(c,r):((a=new XMLHttpRequest).open("POST",c,!0),a.send(r))}var t=d.history,u=document,p=navigator||{},e=localStorage,v=encodeURIComponent,o=t.pushState;t.pushState=function(e){return"function"==typeof t.onpushstate&&t.onpushstate({state:e}),setTimeout(i,l.delay||10),o.apply(t,arguments)},i(),d.ma={trackEvent:function(e,t,o,n){return i("event",e,t,o,n)},trackException:function(e,t){return i("exception",null,null,null,null,e,t)}}}(window,{anonymizeIp:!0,colorDepth:!0,characterSet:!0,screenSize:!0,language:!0});

/*]]>*/ 
      cookieOptions = { 
    msg: &quot;Ce site utilise des cookies de Google pour fournir ses services, personnaliser les annonces et analyser le trafic. En utilisant ce site, vous acceptez l&#39;utilisation de cookies.&quot;, 
    link: &quot;https://www.oktob.net/p/privacy-policy.html&quot;, 
    close: &quot;Ok!&quot;, 
    learn: &quot;En savoir plus&quot; };   
