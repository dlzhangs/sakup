import aaa from "./fun";

let a = aaa();

export default()=>{
    console.log(a);
    return a;
}

export function b(){
    console.log(a);
    return a;
}