var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

//약속된 객체
//M이 가리키는 객체를 모듈 밖에서 사용할 수 있도록 함
module.exports = M;