//import webix from "webix";

export default () => {
}

export function router() {
    /**
     * pretty AJAX URL
     * S.http://domain:port/index.html?param=XXX#!saku.sys.index/moudle.index
     * 
     * N.http://domain:port/#!saku.sub.index:param=XXX
     */
    console.log(location);

    let params = {};
    let subRoot = "";
    let pageView = parsePageView(location.hash);
    if (pageView) {
        let moduleUrl = "src/moudle/"+pageView;
        SystemJS.import(moduleUrl).then(function(app) {
            app.default();
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
let fileNotFound = (err)=>{
    webix.ui({template:"404 not found"});
};