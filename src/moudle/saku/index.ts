/// <reference path="../../../typings/globals/webix/index.d.ts" />

import MenuUI from "./common/menu";
import SidebarUI from "./common/sidebar";

let menuUI = MenuUI();
let sidebarUI = SidebarUI();

export default () => {
    let uid = webix.uid().toString();
    let uidSub = webix.uid().toString();
    let uidBtn = webix.uid().toString();
    let subView = {
        ui: {
            id: uidSub,
            cols: [
            ]
        }
    };
    return {
        ui: {
            id: uid,
            rows: [
                menuUI.ui,
                { height: 2 },
                {
                    cols: [
                        sidebarUI.ui,
                        { view: "resizer" },
                        {
                            rows: [
                                {
                                    id:"lblBreadCrumb",
                                    view: "label",
                                    label: "",
                                    inputWidth: 200,
                                    align: "left"
                                },
                                subView.ui
                            ]
                        }]
                }
            ]
        },
        $init: () => {
        },
        $onurlchange: (params) => {
            console.log(params);
        },
        $event: {
        },
        get $view(): any {
            return webix.$$(uid);
        },
        get $sid(): any {
            return uidSub;
        },
        get $id(): any {
            return uid;
        }
    }
};
