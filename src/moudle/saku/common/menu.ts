export default () => {

  let uid = webix.uid().toString();
  return {
    ui: {
      id: uid,
      height: 100,
      cols: [
        {
          width: 100,
        },
        {
          view: "menu",
          subMenuPos: "down",
          data: [
            {
              value: "银企直连",
              submenu: [{
                value: "账户余额查询",
                href: "#!saku.openbook.index:param=AAA"
              }, {
                value: "账户明细查询",
                href: "#!saku.openbook1.index:param=AAA"
              }, {
                value: "转账信息查询",
                href: "#!saku.openbook.index:param=CCC"
              }, {
                value: "单笔支付",
                href: "#!saku.openbook.index:param=DDD"
              }],
            },
            {
              value: "用户",
              submenu: ["个人设置", "注销"]
            }
          ],
          type: {
            subsign: true,
            height: 50,
            width: 200,
          }
        },
        {}
      ]
    },
    get $view():any{
      return webix.$$(uid)
    }
    
  };
}