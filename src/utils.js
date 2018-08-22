console.log('utils.js is running !')

const square = (x) => x*x;
const add = (a,b)=>a+b;
const sub = (a,b)=>a-b;

export default (a)=>a>0;
export {square,add,sub};