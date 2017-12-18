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
            webix.setCookie("ssUid", "", 0);
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
                let username = values["username"];
                let password = values["password"];
                if (!username || !password) {
                    webix.message("未输入用户名或密码");
                    return;
                }
                if (values["username"] === "admin") {
                    webix.setCookie("ssUid", "98979796192312311", 15);
                    location.href = "#!saku.index";
                    $$(uidWin).close();
                } else {
                    webix.message("用户名或密码不正确");
                    return;
                }
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
