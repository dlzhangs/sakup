export default () => {

    let uid = webix.uid().toString();
    let uidForm = webix.uid().toString();
    var big_film_set = [];

    return {
        ui: {
            id: uid,
            rows: [
                {
                    id: uidForm,
                    view: "form",
                    elements: [
                        {
                            rows: [
                                {
                                    cols: [
                                        {
                                            name: "acctNo",
                                            view: "text",
                                            label: "账号<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            placeholder: "多条用逗号\",\"分隔,最多10条",
                                            width: 500
                                        },
                                        {
                                            view: "button",
                                            value: "查询",
                                            type: "form",
                                            width: 100
                                        },
                                        {
                                            view: "button",
                                            value: "重置",
                                            type: "form",
                                            width: 100,
                                            click: () => {
                                                $$(uidForm).setValues({});
                                            }
                                        },
                                        {}
                                    ]
                                },
                            ]
                        }
                    ]
                },
                //{ view: "resizer" },
                {
                    view: "datatable",
                    tooltip: true,
                    navigation: true,
                    pager: "pagerA",
                    headerRowHeight: 28,
                    rowHeight: 23,
                    data: big_film_set,
                    columns: [
                        { id: "rank", header: "#", width: 50, sort: "int", css: "rank" },
                        {
                            id: "title",//"acctNo",
                            header: "账号",
                            width: 200
                        },
                        {
                            id: "year",//"masterID",
                            header: "客户号",
                            width: 100
                        },
                        {
                            id: "votes",//"balance",
                            header: "账号余额",
                        },
                        {
                            id: "reserveBalance",
                            header: "保留余额",
                            width: 100
                        },
                        {
                            id: "freezeBalance",
                            header: "冻结余额",
                        },
                        {
                            id: "cortrolBalance",
                            header: "控制余额",
                            width: 100
                        },
                        {
                            id: "canUseBalance",
                            header: "可用金额",
                            width: 100
                        },
                        {
                            id: "overdraftBalance",
                            header: "透支余额",
                            fillspace: true
                        }
                    ]
                },
                {
                    view: "pager", id: "pagerA",
                    animate: true,
                    size: 15,
                    group: 5
                },
            ]
        },
        get $view(): any {
            return webix.$$(uid)
        }

    };
}