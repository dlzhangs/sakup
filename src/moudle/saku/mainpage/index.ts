/// <reference path="../../../../typings/globals/webix/index.d.ts" />

import MenuUI from "../common/menu";

import BodyUI from "./body";


let menuUI = MenuUI();
let bodyUI = BodyUI();

export default () => {
    let uid = webix.uid().toString();
    return {
        ui: {
            id: uid,
            rows:[
               menuUI.ui,
               //bodyUI.ui
            ]
        },
        get $view(): any {
            return webix.$$(uid)
        }
    }
};
