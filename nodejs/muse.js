//객체 생성 -> 많아지면 정리해야 함
// var M = {
//     v:'v',
//     f:function(){
//         console.log(this.v);
//     }
// }

//모듈을 가져올 때
var part = require('./mpart.js'); //현재 디렉토리에 있는 mpart.js파일을 읽어서 M에 넣음
console.log(part);
// M.f();

part.f() // M.f();와 똑같이 동작