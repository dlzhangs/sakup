export default () => {

  let uid = webix.uid().toString();
  return {
    ui: {
      id: uid,
      css: "color-menu-back",
      cols: [
        { width: 20 },
        {
          view: "label",
          label: "<span style='color:white;font-size:18pt!important;letter-spacing:10px;'>耕海地产</span>",
          align: "left",
          width: 140
        },
        {
          view: "label",
          label: "<span style='color:white;font-size:11pt!important;letter-spacing:1px;'>心有帆&nbsp;海无界</span>",
          align: "left",
          width: 200
        },
        {
          width: 600,
        },
        {
          view: "menu",
          subMenuPos: "down",
          css: "main-menu",
          data: [
            {
              value: "用户",
              icon: "user",
              submenu: [
                {
                  value: "个人设置",
                  href: "#!saku.login.index"
                },
                {
                  value: "注销",
                  href: "#!saku.login.index"
                }]
            }
          ],
          type: {
            // css: "color-menu-back",
            subsign: true,
            width: 100,
            height: 38,
          }
        },
        {}
      ]
    },
    get $view(): any {
      return webix.$$(uid)
    }

  };
}