/*
function a() {
    console.log('A');
}
*/

//a 변수의 값으로써 함수를 정의
//자바스크립트에서는 함수 = 값
var a = function() {
    console.log('A');
}

//callback 파라미터는 a가 가리키는 함수를 나타냄 -> function() {console.log('A');}
function slowfunc(callback) {
    //callback 함수를 호출하면 console.log('A'); 이 실행됨
    callback();
}

slowfunc(a);