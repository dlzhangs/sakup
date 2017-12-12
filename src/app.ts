let lastHash = "";
let create = () => {
    if (window["app"]) return;
    let app = {};
    webix.extend(app, webix.EventSystem);
    if (("onhashchange" in window) && ((typeof document["documentMode"] === "undefined") || document["documentMode"] == 8)) {
        window.onhashchange = router;
    } else {
        setInterval(function () {
            var ischanged = lastHash !== location.hash;
            if (ischanged) {
                lastHash = location.hash;
                router();
            }
        }, 150);
    }
    app["router"] = router;
    window["app"] = app;
    return app;
};
var app = create();
export default app;

let lastLocalHash = "";
let lastPageUrl = "";
let lastPage = {};
export function router() {
    /**
     * pretty AJAX URL
     * S.http://domain:port/index.html?param=XXX#!saku.sys.index/moudle.index
     * 
     * N.http://domain:port/#!saku.sub.index:param=XXX
     */
    let pageUrl = parsePageUrl(location.hash);
    let params = parseParam(location.hash);
    if (!pageUrl) return;
    if (lastLocalHash !== location.hash) {
        lastLocalHash = location.hash;
        SystemJS.delete(pageUrl);
        if (lastPageUrl !== pageUrl) {
            lastPageUrl = pageUrl;
            if (lastPage && lastPage["$view"]) {
                lastPage["$view"].destructor();
            }
            SystemJS.import(pageUrl).then(function (page) {
                lastPage = page.default();
                webix.ui(lastPage.ui);
                if (lastPage["$init"]) {
                    lastPage["$init"](params);
                }
                if (lastPage["$onurlchange"]) {
                    lastPage["$onurlchange"](params);
                }

            }, function (err) {
                SystemJS.delete(pageUrl);
                fileNotFound(err);
            });
        } else {
            if (lastPage["$onurlchange"]) {
                lastPage["$onurlchange"](params);
            }
        }
    }
};

let parsePageUrl = (urlHash) => {
    if (!urlHash) return ""; 
    let pageUrl = urlHash.indexOf(":")>0 ? urlHash.substr(0, urlHash.indexOf(":")) : urlHash;
    pageUrl = (pageUrl && (pageUrl.indexOf("#!") == 0)) ? pageUrl.substr(2) : pageUrl;
    pageUrl = pageUrl.replace(new RegExp("\\.", "gm"), "/");
    return "src/moudle/" + pageUrl;
};
let parseParam = (urlHash) => {
    let pageUrl = urlHash ? urlHash.substr(0, urlHash.indexOf(":")) : "";
    let paramStr = urlHash ? urlHash.replace(pageUrl, "") : "";
    let params = {};
    if (paramStr) {
        let groups = paramStr.split(":");
        for (let idx in groups) {
            if (groups[idx].indexOf("=") > 1) {
                let paramObj = groups[idx].split("=");
                params[paramObj[0]] = paramObj[1];
            }
        }
    }
    return params;
};
let fileNotFound = (err) => {
    webix.ui({ template: "404 not found" });
};
