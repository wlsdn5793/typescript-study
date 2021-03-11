enum GenderType{
    male="male",
    female="female"
}
//숫자 열거형에 반대된 문자형 열거형이 값을 알아보기 편하다는 장점이 있음

let student = {
    name: 'Lee',
    age: 18,
    course: 'Fighting Typescript',
    codingIQ: 0,
    code: function(){
        console.log('brain is not worknig');
    }
}
//typescript에서 이미 프로퍼티 값의 타입을 파악 ex) name = string
//name은 string이기 때문에 string 이외의 값은 들어갈 수 없음
student.age = 18.5;

let age:number = 18;
//타입 명시로 age가 number임을 명시함
interface Student{
    studentID: number;
    studentName: string;
    age?: number;
    gender: 'male' | 'female';
    subject: string;
    courseCompleted: boolean;
    addComment?:(comment:string) => string;
    readonly phoneNumber?: number;
}
//객체를 인터페이스로 지정
//프로퍼티명 뒤에 ?를 사용하여 선택적 프로퍼티로 만들어준다.
function getStudent(studentID: number): Student{
    return{
        studentID: 2216,
        studentName: 'Lee',
        gender: 'male',
        subject: 'Web',
        courseCompleted: true,
    }
}
//인터페이스가 반환값이기 때문에 리턴에서 인터페이스의 모든 요소를 반환하여야 한다.

let student1= {
    studentID: 2215,
    studentName: 'Lee',
    age: 18,
    gender: GenderType.male,
    subject: 'Server',
    courseCompleted: false,
}
function saveStudent (student: Student): void{
}

saveStudent(student1);