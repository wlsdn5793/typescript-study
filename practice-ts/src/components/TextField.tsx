import React, { useState } from 'react';
import * as S from './style';

// React.FC => React Functional Component의 약자
// 컴포넌트 타입이라는 것을 명시해준다.

const TextField: React.FC = () => {
    let [counter, setCounter] = useState(0);
    let [itemPrice, setItemPrice] = useState(10);
    let [makeMoney, setMakeMoney] = useState(1);
    let [upgradePrice, setUpgradePrice] = useState(30);
    let [level, upgradeLevel] = useState(1);
    function buyItem():void{
        if(counter >= itemPrice){
            console.log('구매성공');
            setCounter(counter-=itemPrice);
            setItemPrice(itemPrice+= 10);
            upgradeLevel(level+=1);
        }
        else{
            alert('돈이 부족하여 구매할 수 없습니다.');
        }
    }
    function upgradeClick():void{
        if(counter >= upgradePrice){
            setMakeMoney(makeMoney += 1);
            setCounter(counter-=upgradePrice);
            setUpgradePrice(upgradePrice *= 2);

        }
        else{
            console.log('업그레이드 성공');
            alert('돈이 부족하여 업그레이드할 수 없습니다.');
        }
    }
    return(
        <div>
            <h1>현재 가지고 있는 금액은 {counter}입니다.</h1>
            <S.CounterBtn onClick={() => setCounter(counter + makeMoney)}>+1</S.CounterBtn>
            <S.BuyBtn onClick={() => buyItem()}>구매하기 {itemPrice}원</S.BuyBtn>
            <S.BuyBtn onClick={() => upgradeClick()}>클릭 업그레이드하기 {upgradePrice}원(현재 : {makeMoney})</S.BuyBtn>
            <h1>현재 레벨은 {level}레벨 입니다.</h1>
        </div>
    )
}

export default TextField;