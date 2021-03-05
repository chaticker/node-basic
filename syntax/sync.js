//file read & file read sync 비교
var fs = require('fs');

/* 동기 방식
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//비동기 방식: function(err, result){} 콜백 함수 사용
//비동기 방식에서의 readFile은 리턴값이 없기 때문에 함수를 세 번째 인자로 줘야함 -> 노드가 파일을 읽는 작업이 끝나면 함수 실행
//에러가 있으면 에러 처리, 두 번째 파라미터에는 파일의 내용을 인자로 공급하도록 약속되어 있음
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');