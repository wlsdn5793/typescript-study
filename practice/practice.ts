enum num {
    zero,
    one = 1,
    two
};
/*
enum에 값을 할당하지 않으면 0이 된다. -> zero = 0
값이 할당되어 있고 그 다음값이 할당되지 않으면 그 전 값에 +1을 더한다. -> two = 2
*/
console.log(num.zero, num.one, num.two); // 0, 1, 2

/* 클래스의 접근 범위
public: 외부, 상속 둘 다 접근 가능합니다.
protected: 외부에서 접근은 금지하지만 상속으로는 접근 가능
private: 외부, 상속 둥 다 접근할 수 없습니다.
readonly: 읽기 전용(값 변경 X)

*/