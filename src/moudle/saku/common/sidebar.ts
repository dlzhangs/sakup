export default () => {

  let uid = webix.uid().toString();

  return {

    ui: {
      id: uid,
      view: "sidebar",
      width: 150,
      data: [
        // {
        //   id: "#",
        //   icon: "dashboard",
        //   value: "银企直连",
        //   data: [
        //     {
        //       id: "balance",
        //       value: "账户余额查询",
        //       href: "#!saku.balance.index",
        //     },
        //     {
        //       id: "detailed",
        //       value: "账户明细查询",
        //     },
        //     {
        //       id: "transfer",
        //       value: "转账信息查询",
        //     },
        //     {
        //       id: "payment",
        //       value: "单笔支付",
        //     }
        //   ],
        // },
      ],
      on: {
        onAfterSelect: function (id) {
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