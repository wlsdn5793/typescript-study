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