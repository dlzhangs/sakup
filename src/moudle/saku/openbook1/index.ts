/// <reference path="../../../../typings/globals/webix/index.d.ts" />

import MenuUI from "../common/menu";

import BodyUI from "./body";


let menuUI = MenuUI();
let bodyUI = BodyUI();

export default () => {

    webix.ui(menuUI.ui);
   // webix.ui(bodyUI.ui);
};

export function destructor() {
    if(menuUI.$view){
        menuUI.$view.destructor();
    }
    if(bodyUI.$view){
        bodyUI.$view.destructor();
    }
}
