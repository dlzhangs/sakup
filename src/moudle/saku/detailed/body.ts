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
                                            placeholder: "",
                                            width: 300
                                        },
                                        {
                                            name: "queryNumber",
                                            view: "counter",
                                            label: "笔数<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            //labelWidth: 200,
                                            inputWidth: 300,
                                            step: 1,
                                            value: 20,
                                            min: 0,
                                            max: 100,
                                            width: 200
                                        },
                                        {
                                            name: "beginDate",
                                            view: "datepicker",
                                            label: "开始日期<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            date: new Date(2012, 6, 8),
                                            format: "%Y-%m-%d",
                                            timepicker: true,
                                            width: 200
                                        },
                                        {}
                                    ]
                                },
                                {
                                    cols: [
                                        {
                                            name: "subAccount",
                                            view: "text",
                                            label: "对方账号",
                                            labelAlign: "right",
                                            placeholder: "",
                                            value: "",
                                            width: 300
                                        },
                                        {
                                            name: "beginNumber",
                                            view: "counter",
                                            label: "起始笔数<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            //labelWidth: 200,
                                            inputWidth: 300,
                                            step: 1,
                                            value: 1,
                                            min: 1,
                                            max: 100,
                                            width: 200
                                        },
                                        {
                                            name: "endDate",
                                            view: "datepicker",
                                            label: "结束日期<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            date: new Date(2012, 6, 8),
                                            format: "%Y-%m-%d",
                                            timepicker: true,
                                            width: 200
                                        },
                                        {}
                                    ]
                                },
                                {
                                    cols: [
                                        {
                                            name: "subAcctName",
                                            view: "text",
                                            label: "对方户名",
                                            labelAlign: "right",
                                            placeholder: "",
                                            width: 300
                                        },
                                        {
                                            name: "transAmount",
                                            view: "counter",
                                            label: "交易金额",
                                            labelAlign: "right",
                                            //labelWidth: 200,
                                            inputWidth: 300,
                                            step: 1,
                                            value: 0,
                                            min: 0,
                                            max: 100,
                                            width: 200
                                        },
                                        {}
                                    ]
                                },
                                {
                                    height: 5,
                                },
                                {
                                    cols: [
                                        { width: 285 },
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
                                                $$(uidForm).setValues({queryNumber:20,beginNumber:1});
                                            }
                                        },
                                        {}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                //{ view: "resizer" },
                {
                    padding: 1,
                    rows: [
                        {
                            cols: [
                                {
                                    //id: "lblAcctNo",
                                    view: "label",
                                    label: "账号: XXXX-XXXX-XXXX",
                                    inputWidth: 200,
                                    align: "left"
                                },
                                {
                                    //id: "lblAcctName",
                                    view: "label",
                                    label: "账号名称: XXX",
                                    inputWidth: 200,
                                    align: "left"
                                },

                                {
                                    //id: "lblTotalCount",
                                    view: "label",
                                    label: "交易总笔数: 123",
                                    inputWidth: 200,
                                    align: "left"
                                },
                                {
                                    //id: "lblCurrency",
                                    view: "label",
                                    label: "账户币种: 人民币",
                                    inputWidth: 200,
                                    align: "left"
                                },
                                {}
                            ]
                        },
                    ]
                },
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
                            id: "title",//"voucherNo"
                            header: "凭证号",
                            width: 200,
                            sort: "string"
                        },
                        {
                            id: "year",//"seqNo"
                            header: "交易流水号",
                            width: 80,
                            sort: "int"
                        },
                        {
                            id: "votes", //"txAmount"
                            header: "交易金额",
                            width: 100,
                            sort: "int"
                        },
                        {
                            id: "balance",
                            header: "账户余额",
                            width: 100
                        },
                        {
                            id: "tranFlag",
                            header: "<span title='0：借; 1：贷'>借贷标志<span class='webix_icon fa-info-circle' style='margin-left:5px;'></span></span>",
                            width: 100
                        },
                        {
                            id: "transDate",
                            header: "交易日期",
                        },
                        {
                            id: "transTime",
                            header: "交易时间",
                            width: 100
                        },
                        {
                            id: "note",
                            header: "备注",
                        },
                        {
                            id: "remark",
                            header: "摘要代码",
                            width: 100
                        },
                        {
                            id: "payeeBankNo",
                            header: "对方行号",
                            width: 100
                        },
                        {
                            id: "payeeBankName",
                            header: "对方行名",
                            width: 100
                        },
                        {
                            id: "payeeAcctNo",
                            header: "对方账号",
                            width: 100
                        },
                        {
                            id: "payeeName",
                            header: "对方户名",
                            width: 100
                        },
                        {
                            id: "transCode",
                            header: "交易代码",
                            width: 100
                        },
                        {
                            id: "branchId",
                            header: "分行ID",
                            width: 100
                        },
                        {
                            id: "customerAcctNo",
                            header: "客户账号",
                            width: 100
                        },
                        {
                            id: "payeeAcctType",
                            header: "对方账号类型",
                            width: 100
                        },
                        {
                            id: "transCounter",
                            header: "交易柜员",
                            width: 100
                        },
                        {
                            id: "authCounter",
                            header: "授权柜员",
                            width: 100
                        },
                        {
                            id: "otherChar10",
                            header: "备用域10位",
                            width: 100
                        },
                        {
                            id: "otherChar40",
                            header: "备用域40位",
                            width: 100
                        },
                        {
                            id: "seqNum",
                            header: "传票序号",
                            width: 100
                        },
                        {
                            id: "revFlag",
                            header: "冲补标志",
                            //fillspace: true
                        }
                    ]
                },
                {
                    view: "pager", id: "pagerA",
                    animate: true,
                    size: 10,
                    group: 5
                },
            ]
        },
        get $view(): any {
            return webix.$$(uid)
        }

    };
}