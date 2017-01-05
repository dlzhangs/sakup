import body from "./body";

let bodyUI = body();

export default()=>{
    return "";
}

export function show(){
    console.log(bodyUI);
    webix.ui(bodyUI.ui);
    return bodyUI;
}