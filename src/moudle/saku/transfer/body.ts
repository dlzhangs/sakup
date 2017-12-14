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
                                            //inputWidth: 300,
                                            step: 1,
                                            value: 10,
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
                                            name: "elecChequeNo",
                                            view: "text",
                                            label: "电子凭证号",
                                            labelAlign: "right",
                                            placeholder: "",
                                            width: 300
                                        },
                                        {
                                            name: "beginNumber",
                                            view: "counter",
                                            label: "起始笔数<span style='color:red;'>*</span>",
                                            labelAlign: "right",
                                            //labelWidth: 200,
                                            //inputWidth: 300,
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
                                            name: "acceptNo",
                                            view: "text",
                                            label: "受理编号",
                                            labelAlign: "right",
                                            placeholder: "",
                                            width: 300
                                        },
                                        {
                                            name: "serialNo",
                                            view: "text",
                                            label: "序号",
                                            labelAlign: "right",
                                            placeholder: "",
                                            width: 185
                                        },
                                        { width: 16 },
                                        {
                                            name: "singleOrBatchFlag",
                                            view: "select",
                                            label: "批量&单笔",
                                            labelAlign: "right",
                                            width: 200,
                                            value: -1,
                                            options: [
                                                { "id": -1, "value": "" },
                                                { "id": 0, "value": "单笔" },
                                                { "id": 1, "value": "批量" }
                                            ]
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
                                                $$(uidForm).setValues({queryNumber:10,beginNumber:1});
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
                                    //id: "lblTotalCount",
                                    view: "label",
                                    label: "交易笔数: 999",
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
                            id: "title",//"elecChequeNo"
                            header: "电子凭证号",
                            width: 200,
                            sort: "string"
                        },
                        {
                            id: "year",//"acceptNo"
                            header: "受理编号",
                            width: 80,
                            sort: "int"
                        },
                        {
                            id: "votes", //"serialNo"
                            header: "序号",
                            width: 100,
                            sort: "int"
                        },
                        {
                            id: "transDate",
                            header: "交易日期",
                            width: 100
                        },
                        {
                            id: "promiseDate",
                            header: "预约日期",
                            width: 100
                        },
                        {
                            id: "acctNo",
                            header: "账号",
                        },
                        {
                            id: "acctName",
                            header: "付款人账户名称",
                            width: 100
                        },
                        {
                            id: "payeeAcctNo",
                            header: "收款人账号",
                        },
                        {
                            id: "payeeName",
                            header: "收款人名称",
                            width: 100
                        },
                        {
                            id: "payeeType",
                            header: "收款人账户类型",
                            width: 100
                        },
                        {
                            id: "payeeBankName",
                            header: "收款行名称",
                            width: 100
                        },
                        {
                            id: "payeeAddress",
                            header: "收款人地址",
                            width: 100
                        },
                        {
                            id: "amount",
                            header: "支付金额",
                            width: 100
                        },
                        {
                            id: "sysFlag",
                            header: "本行它行标志",
                            width: 100
                        },
                        {
                            id: "remitLocation",
                            header: "同城异地标志",
                            width: 100
                        },
                        {
                            id: "note",
                            header: "附言",
                            width: 100
                        },
                        {
                            id: "transStatus",
                            header: "交易状态",
                            width: 100
                        },
                        {
                            id: "seqNo",
                            header: "交易流水号",
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