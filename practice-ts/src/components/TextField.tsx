import React from 'react';

interface Person{
    name : string;
    age : number;
}
interface Props{
    text?: string;
    ok: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person?: Person;
}
// React.FC => React Functional Component의 약자
// 컴포넌트 타입이라는 것을 명시해준다.

const TextField: React.FC<Props> = (props) => {
    // return {
    //     name: 'lee',
    //     age:18,
    // }
    return <div></div>
}

export default TextField;