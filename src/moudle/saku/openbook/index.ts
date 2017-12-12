/// <reference path="../../../../typings/globals/webix/index.d.ts" />

import MenuUI from "../common/menu";

import BodyUI from "./body";


let menuUI = MenuUI();
let bodyUI = BodyUI();

export default () => {
    let uid = webix.uid().toString();
    let uidBtn = webix.uid().toString();
    return {
        ui: {
            id: uid,
            view: "accordion",
            rows: [
                menuUI.ui,
                {
                    id: uidBtn,
                    view: "button",
                    value: "Button",
                    type: "form",
                    inputWidth: 100
                },
                bodyUI.ui
            ]
        },
        $init: () => {
            $$(uidBtn).attachEvent("onItemClick", function (id) {
                console.log("onItemClick");
            });
            console.log("init");
        },
        $onurlchange: (params) => {
            console.log(params);
        },
        $event: {
            aaa: () => {
                console.log("AAA");
            }
        },
        get $view(): any {
            return webix.$$(uid)
        }
    }
};
