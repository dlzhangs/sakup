export default () => {

  let uid = webix.uid().toString();
  return {
    ui: {
      id: uid,
      css: "color-menu-back",
      cols: [
        {
          width: 1000,
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