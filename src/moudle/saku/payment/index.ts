/// <reference path="../../../../typings/globals/webix/index.d.ts" />

import BodyUI from "./body";

let bodyUI = BodyUI();

export default () => {
    let uid = webix.uid().toString();
    return {
        ui: {
            id: uid,
            cols: [
                bodyUI.ui
            ]
        },
        get $view(): any {
            return webix.$$(uid)
        },
        get $id(): any {
            return uid;
        },
        $init: () => {
            $$("lblBreadCrumb").setValue("&nbsp;银企直连 > " + "单笔支付");
        }
    }
};
