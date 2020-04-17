
  (function() {
    if (window.zhuge) return;
    window.zhuge = [];
    window.zhuge.methods = "_init identify track trackRevenue getDid getSid getKey setSuperProperty setUserProperties setWxProperties setPlatform".split(" ");
    window.zhuge.factory = function(b) {
      return function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(b);
        window.zhuge.push(a);
        return window.zhuge;
      }
    };
    for (var i = 0; i < window.zhuge.methods.length; i++) {
      var key = window.zhuge.methods[i];
      window.zhuge[key] = window.zhuge.factory(key);
    }
    window.zhuge.load = function(b, x) {
      if (!document.getElementById("zhuge-js")) {
        var a = document.createElement("script");
        var verDate = new Date();
        var verStr = verDate.getFullYear().toString() + verDate.getMonth().toString() + verDate.getDate().toString();

        a.type = "text/javascript";
        a.id = "zhuge-js";
        a.async = !0;
        a.src = 'https://zgsdk.zhugeio.com/zhuge.min.js?v=' + verStr;
        a.onerror = function() {
          window.zhuge.identify = window.zhuge.track = function(ename, props, callback) {
            if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
              callback();
            } else if (Object.prototype.toString.call(props) === '[object Function]') {
              props();
            }
          };
        };
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(a, c);
        window.zhuge._init(b, x)
      }
    };
    window.zhuge.load('9b15109dc61a4fd3b8abfc8173609abd', { //配置应用的AppKey
      superProperty: { //全局的事件属性(选填)
        '应用名称': '超市内嵌页'
      },
       adTrack:false,       //广告监测开关,默认为false 
       zgsee:false,        //视屏采集开关, 默认为false
       autoTrack: false,    //启用全埋点采集（选填，默认false）            
       singlePage: false,   //是否是单页面应用（SPA），启用autoTrack后生效（选填，默认false）  
       debug:false        //实时调试的时候开启，方便检查埋点效果。调试结束后应立即关闭，防止产生大量无用数据。
    });
})()
