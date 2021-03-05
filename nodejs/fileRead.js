var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
});
//왜 안나옴? -> node nodejs/fileRead.js 실행했을 때, fileRead는 sample.txt와 같은 디렉토리에 있지만, 노드는 nodejs 상위 디렉토리에서 실행 됐기 때문
// $cd nodejs -> node fileRead.js -> 파일 읽기 가능