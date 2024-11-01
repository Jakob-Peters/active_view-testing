(function() {
  function i(e) {
      if (!window.frames[e]) {
          if (document.body && document.body.firstChild) {
              var t = document.body;
              var n = document.createElement("iframe");
              n.style.display = "none";
              n.name = e;
              n.title = e;
              t.insertBefore(n, t.firstChild)
          } else {
              setTimeout(function() {
                  i(e)
              }, 5)
          }
      }
  }

  function e(n, o, r, f, s) {
      function e(e, t, n, i) {
          if (typeof n !== "function") {
              return
          }
          if (!window[o]) {
              window[o] = []
          }
          var a = false;
          if (s) {
              a = s(e, i, n)
          }
          if (!a) {
              window[o].push({
                  command: e,
                  version: t,
                  callback: n,
                  parameter: i
              })
          }
      }
      e.stub = true;
      e.stubVersion = 2;

      function t(i) {
          if (!window[n] || window[n].stub !== true) {
              return
          }
          if (!i.data) {
              return
          }
          var a = typeof i.data === "string";
          var e;
          try {
              e = a ? JSON.parse(i.data) : i.data
          } catch (t) {
              return
          }
          if (e[r]) {
              var o = e[r];
              window[n](o.command, o.version, function(e, t) {
                  var n = {};
                  n[f] = {
                      returnValue: e,
                      success: t,
                      callId: o.callId
                  };
                  if (i.source) {
                      i.source.postMessage(a ? JSON.stringify(n) : n, "*")
                  }
              }, o.parameter)
          }
      }
      if (typeof window[n] !== "function") {
          window[n] = e;
          if (window.addEventListener) {
              window.addEventListener("message", t, false)
          } else {
              window.attachEvent("onmessage", t)
          }
      }
  }
  e("__tcfapi", "__tcfapiBuffer", "__tcfapiCall", "__tcfapiReturn");
  i("__tcfapiLocator")
})(); < /script><script type="text/javascript
">(function(){(function(e,r){var t=document.createElement("
link ");t.rel="
preconnect ";t.as="
script ";var n=document.createElement("
link ");n.rel="
dns - prefetch ";n.as="
script ";var i=document.createElement("
script ");i.id="
spcloader ";i.type="
text / javascript ";i["
async "]=true;i.charset="
utf - 8 ";var o="
https: //sdk.privacy-center.org/"+e+"/loader.js?target_type=notice&target="+r;if(window.didomiConfig&&window.didomiConfig.user){var a=window.didomiConfig.user;var c=a.country;var d=a.region;if(c){o=o+"&country="+c;if(d){o=o+"&region="+d}}}t.href="https://sdk.privacy-center.org/";n.href="https://sdk.privacy-center.org/";i.src=o;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s);s.parentNode.insertBefore(n,s);s.parentNode.insertBefore(i,s)})("d0661bea-d696-4069-b308-11057215c4c4","KJ7YRD3N")})();