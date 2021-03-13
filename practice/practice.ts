let anyType: any;
//타입스크립트는 타입에 관한 더 많은 정보를 제시할수록 좋다.
let price: number | string;
price: 3;
price: 'goldmedal';

type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;
const calculateTotalCost = (price: StrOrNum, qty: number):void=>{
};

const findOrderID = (customer:{costomerID: StrOrNum, name:string}, productId: StrOrNum): StrOrNum =>{
    return orderID;
};
const setItemPrice = (variable: StrOrNum): void =>{
    if(typeof variable === 'string'){
        totalCost = 0;
    } else{
        totalCost = variable;
    }
};
setItemPrice(50);