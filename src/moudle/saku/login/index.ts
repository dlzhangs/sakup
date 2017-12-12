/// <reference path="../../../../typings/globals/webix/index.d.ts" />

export default () => {
    let uid = webix.uid().toString();
    let uidLogin = webix.uid().toString();
    let uidReset = webix.uid().toString();
    return {
        ui: {
            id:uid,
            view: "form",
            width: 300,
            elements: [
                { view: "text", name: "username", label: "用户名" },
                { view: "text", name: "password", type: "password", label: "密码" },
                {
                    cols: [
                        { id: uidLogin, view: "button", value: "登录", type: "form" },
                        { id: uidReset, view: "button", value: "重置" }
                    ]
                }
            ]
        ]
        },
        $init: () => {
            $$(uidLogin).attachEvent("onItemClick", function (id) {
                let values = $$(uid).getValues();
                if (values["username"]==="admin") {
                    location.href="http://localhost/#!saku.mainpage.index";
                }
            });
            $$(uidReset).attachEvent("onItemClick", function (id) {
                $$(uid).setValues({username:"",password:""});
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
