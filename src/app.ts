let lastHash = "";
let create = () => {
    if (window["app"]) return;
    let app = {};
    webix.extend(app, webix.EventSystem);
    if(("onhashchange" in window) && ((typeof document["documentMode"]==="undefined") || document["documentMode"]==8)) {
        window.onhashchange = router;
    } else {
        setInterval(function() {  
            var ischanged = lastHash !== location.hash; 
            if(ischanged) {  
                lastHash = location.hash;
                router();
            }  
        }, 150);  
    }
    app["router"]= router;
    window["app"] =app;
    return app;
};
var app = create();
export default app;

let lastLocalHash = "";
let lastPage = {};
export function router() {
    /**
     * pretty AJAX URL
     * S.http://domain:port/index.html?param=XXX#!saku.sys.index/moudle.index
     * 
     * N.http://domain:port/#!saku.sub.index:param=XXX
     */
    let pageView = parsePageView(location.hash);
    let params = parseParam(location.hash);
    let moduleUrl = "src/moudle/"+pageView;
    if (moduleUrl && location.hash!==lastLocalHash) {
        lastLocalHash = location.hash;
        if (lastPage && lastPage["destructor"]) {
            lastPage["destructor"]();
        }
        SystemJS.delete(moduleUrl);
        SystemJS.import(moduleUrl).then(function(page) {
            lastPage = page;
            page.default();
        },function(err){
            SystemJS.delete(moduleUrl);
            fileNotFound(err);
        });
    } else {
        fileNotFound("");
    }
};

let parsePageView = (urlHash)=>{
    let pageView = urlHash ? urlHash.substr(0,urlHash.indexOf(":")) : "";
    pageView = (pageView && (pageView.indexOf("#!") == 0)) ? pageView.substr(2) : pageView;
    pageView = pageView.replace(new RegExp("\\.","gm"),"/");
    return pageView;
};
let parseParam = (urlHash)=>{
    let pageView = urlHash ? urlHash.substr(0,urlHash.indexOf(":")) : "";
    let paramStr = urlHash? urlHash.replace(pageView, ""):"";
    let params = {};
    if (paramStr) {
        let groups = paramStr.split(":");
        for (let idx in groups) {
            if (groups[idx].indexOf("=")>1) {
                let paramObj = groups[idx].split("=");
                params[paramObj[0]] = paramObj[1];
            }
        }
    }
    return params;
};
let fileNotFound = (err)=>{
    webix.ui({template:"404 not found"});
};
