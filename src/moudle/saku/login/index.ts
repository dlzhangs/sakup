/// <reference path="../../../../typings/globals/webix/index.d.ts" />

export default () => {
    let uid = webix.uid().toString();
    let uidWin = webix.uid().toString();
    let uidForm = webix.uid().toString();
    let uidLogin = webix.uid().toString();
    let uidReset = webix.uid().toString();
    return {
        ui: {
            id: uid,
            css: "color-menu-back"
        },
        $init: () => {
            let window = webix.ui({
                id: uidWin,
                view: "window",
                head: "用户登录",
                move: false,
                position: "center",
                width: 300,
                height: 300,
                body: {
                    id: uidForm,
                    view: "form",
                    width: 300,
                    elements: [
                        { view: "text", name: "username", label: "用户名" },
                        { view: "text", name: "password", label: "密码", type: "password" },
                        {
                            cols: [
                                { id: uidLogin, view: "button", value: "登录", type: "form" },
                                { id: uidReset, view: "button", value: "重置" }
                            ]
                        }
                    ]
                }
            }).show();

            $$(uidLogin).attachEvent("onItemClick", function (id) {
                let values = $$(uidForm).getValues();
                if (values["username"] === "admin") {
                    location.href = "#!saku.index";
                }
                $$(uidWin).close();
            });
            $$(uidReset).attachEvent("onItemClick", function (id) {
                $$(uidForm).setValues({});
            });
        },
        $onurlchange: (params) => {
            console.log(params);
        },
        get $view(): any {
            return webix.$$(uid)
        }
    }
};
