var testFolder = './data';
var fs = require('fs');

//특정 디렉토리에 있는 파일의 목록을 배열로 만들어서 전달함
fs.readdir(testFolder, function(err, fileList){
    console.log(fileList);
})