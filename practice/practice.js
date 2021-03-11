var student = {
    name: 'Lee',
    age: 18,
    course: 'Fighting Typescript',
    codingIQ: 0,
    code: function () {
        console.log('brain is not worknig');
    }
};
//typescript에서 이미 프로퍼티 값의 타입을 파악 ex) name = string
//name은 string이기 때문에 string 이외의 값은 들어갈 수 없음
student.age = 18.5;
var age = 18;
//객체를 인터페이스로 지정
//프로퍼티명 뒤에 ?를 사용하여 선택적 프로퍼티로 만들어준다.
function getStudent(studentID) {
    return {
        studentID: 2216,
        studentName: 'Lee',
        gender: 'male',
        subject: 'Web',
        courseCompleted: true
    };
}
//인터페이스가 반환값이기 때문에 리턴에서 인터페이스의 모든 요소를 반환하여야 한다.
var student1 = {
    studentID: 2215,
    studentName: 'Ju Yul',
    age: 18,
    gender: 'male',
    subject: 'Server',
    courseCompleted: false
};
function saveStudent(student) {
}
saveStudent(student1);
