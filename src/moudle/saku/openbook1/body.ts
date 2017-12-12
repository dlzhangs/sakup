export default () => {

    let uid = webix.uid().toString();
    return {
        ui: {
            id: uid,
            height: 550,
            width: 700,
            rows: [
                {
                    view: "calendar",
                    id: "my_calendar",
                    date: new Date(2012, 3, 16),
                    weekHeader: true,
                    events: webix.Date.isHoliday,
                    calendarDateFormat: "%Y-%m-%d",
                    width: 300,
                    height: 250
                },
                { template: "row 1", height: 35 },
                { template: "row 1" },
                { view: "resizer" },
                { template: "row 2" },
                { view: "resizer" },
                {
                    cols: [
                        {
                            id: "a1",
                            template: "column 1",
                            width: 150
                        },
                        {
                            view: "resizer",
                            id: "resizer"
                        },
                        {
                            template: "column 2"
                        },
                        {
                            template: "column 3"
                        }
                    ]
                }
            ]
        },
        get $view(): any {
            return webix.$$(uid)
        }

    };
}