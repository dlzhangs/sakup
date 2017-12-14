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
let lastRootUrl = "";
let lastRoot = {};
let lastPageUrl = "";
let lastPage = {};

let lastInfo = {
    localHash: "",
    rootUrl: "",
    root: {},
    pageUrl: "",
    page: {}
};
/**
 * pretty AJAX URL
 * S.http://domain:port/#!saku.sys.index/moudle.index:param=XXX
 * 
 * N.http://domain:port/#!saku.sub.index:param=XXX
 */
export function router() {

    if (lastLocalHash === location.hash) return;
    lastLocalHash = location.hash;

    let rootUrl = parseRootUrl(location.hash);
    let pageUrl = parsePageUrl(location.hash);
    let params = parseParam(location.hash);

    if (!rootUrl) return;
    if (!pageUrl) {
        SystemJS.delete(rootUrl);
        if (lastRootUrl !== rootUrl) {
            lastRootUrl = rootUrl;
            if (lastRoot && lastRoot["$view"]) {
                lastRoot["$view"].destructor();
            }
            SystemJS.import(rootUrl).then(function (page) {
                lastRoot = page.default();
                webix.ui(lastRoot.ui);
                if (lastRoot["$init"]) {
                    lastRoot["$init"](params);
                }
                if (lastRoot["$onurlchange"]) {
                    lastRoot["$onurlchange"](params);
                }

            }, function (err) {
                SystemJS.delete(rootUrl);
                fileNotFound(err);
            });
        }

    } else {
        SystemJS.delete(pageUrl);
        if (lastPageUrl !== pageUrl) {
            lastPageUrl = pageUrl;
            // if (lastPage && lastPage["$view"]) {
            //     lastPage["$view"].destructor();
            // }
            if (lastPage.$id) {
                $$(lastRoot.$sid).removeView(lastPage.$id);
            }
            SystemJS.import(pageUrl).then(function (page) {
                lastPage = page.default();

                SystemJS.delete(rootUrl);
                if (lastRootUrl !== rootUrl) {
                    lastRootUrl = rootUrl;
                    if (lastRoot && lastRoot["$view"]) {
                        lastRoot["$view"].destructor();
                    }
                    SystemJS.import(rootUrl).then(function (page) {
                        lastRoot = page.default();
                        webix.ui(lastRoot.ui);
                        $$(lastRoot.$sid).addView(lastPage.ui);
                        if (lastRoot["$init"]) {
                            lastRoot["$init"](params);
                        }
                        if (lastRoot["$onurlchange"]) {
                            lastRoot["$onurlchange"](params);
                        }

                        if (lastPage["$init"]) {
                            lastPage["$init"](params);
                        }
                        if (lastPage["$onurlchange"]) {
                            lastPage["$onurlchange"](params);
                        }

                    }, function (err) {
                        SystemJS.delete(rootUrl);
                        fileNotFound(err);
                    });
                } else {
                    $$(lastRoot.$sid).addView(lastPage.ui);
                    if (lastRoot["$init"]) {
                        lastRoot["$init"](params);
                    }
                    if (lastRoot["$onurlchange"]) {
                        lastRoot["$onurlchange"](params);
                    }


                    if (lastPage["$init"]) {
                        lastPage["$init"](params);
                    }
                    if (lastPage["$onurlchange"]) {
                        lastPage["$onurlchange"](params);
                    }
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

let parseRootUrl = (urlHash) => {
    if (!urlHash) return "";
    let pageUrl = urlHash.indexOf(":") > 0 ? urlHash.substr(0, urlHash.indexOf(":")) : urlHash;
    pageUrl = (pageUrl && (pageUrl.indexOf("#!") == 0)) ? pageUrl.substr(2) : pageUrl;
    if (pageUrl.indexOf("/") > 0) {
        pageUrl = pageUrl.split("/")[0];
    }
    pageUrl = pageUrl.replace(new RegExp("\\.", "gm"), "/");
    return "src/moudle/" + pageUrl;
};

let parsePageUrl = (urlHash) => {
    if (!urlHash) return "";
    let pageUrl = urlHash.indexOf(":") > 0 ? urlHash.substr(0, urlHash.indexOf(":")) : urlHash;
    pageUrl = (pageUrl && (pageUrl.indexOf("#!") == 0)) ? pageUrl.substr(2) : pageUrl;
    if (pageUrl.indexOf("/") > 0) {
        let root = pageUrl.split("/")[0];
        if (root.indexOf(".") > 0) {
            root = root.substr(0, root.lastIndexOf("."));
        }
        pageUrl = root + "/" + pageUrl.split("/")[1];
        pageUrl = pageUrl.replace(new RegExp("\\.", "gm"), "/");
        return "src/moudle/" + pageUrl;
    }
    return "";
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
