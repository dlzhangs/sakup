/// <reference path="../typings/globals/webix/index.d.ts" />

import body from "./body";

let bodyUI = body();

export default () => {
    console.log(bodyUI);
    webix.ui(bodyUI.ui);
}
