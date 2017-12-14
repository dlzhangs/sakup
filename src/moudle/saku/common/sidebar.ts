export default () => {

  let uid = webix.uid().toString();

  var menu_data = [
    {
      id: "#",
      icon: "dashboard",
      value: "银企直连",
      data: [
        {
          id: "balance",
          value: "账户余额查询",
          href: "#!saku.balance.index",
        },
        {
          id: "detailed",
          value: "账户明细查询",
        },
        {
          id: "transfer",
          value: "转账信息查询",
        },
        {
          id: "payment",
          value: "单笔支付",
        }
      ],
    },
  ];

  return {

    ui: {
      view: "sidebar",
      width: 150,
      data: menu_data,
      on: {
        onAfterSelect: function (id) {
          //webix.message("Selected: "+this.getItem(id).value)
          if ("#" !== id) {
            location.href = "#!saku.index/" + id + ".index";
            //$$("lblBreadCrumb").setValue("银企直连 > " + this.getItem(id).value);
          }
        }
      }
    },
    get $view(): any {
      return webix.$$(uid)
    }

  };
}