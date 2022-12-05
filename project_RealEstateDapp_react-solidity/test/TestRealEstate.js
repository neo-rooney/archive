//솔리디피 파일을 가져와 변수로 접근 할 수 있도록 설정
var RealEstate = artifacts.require("./RealEstate.sol");
 
contract('RealEstate', function(accounts) { //컨트랙트를 test할때 두개의 인자를 받음(테스팅할 컨트랙트의 이름,account를 콜백으로 받는 함수 )
    var realEstateInstance; //realEstate의 Instance를 저장한 전역변수 선언
 
    it("컨트랙의 소유자 초기화 테스팅", function() { //it을 사용해 무슨 내용의 테스트를 할지 정의
        return RealEstate.deployed().then(function(instance) {//RealEstate.sol의 컨트랙이 배포되었다면 컨트랙트의 instance를 realEstateInstance 변수에 저장
            realEstateInstance = instance;
            return realEstateInstance.owner.call(); //realEstateInstance의 owner를 불러와 return한다.  
        }).then(function(owner) {
            assert.equal(owner.toUpperCase(), accounts[0].toUpperCase(), "owner가 가나슈 첫번째 계정과 동일하지 않습니다.");       
        }); //실재값owner.toUpperCase()과 예상값 accounts[0].toUpperCase()이 같은지 확인 틀리다면 설정한 오류메세지 출력 
    });     //실재값은 소문자로 리턴되고 예상값은 소문자와 대문자가 섞여서 리턴되므로 모두 대문자로 변형
    it("ganache 두번째 계정으로 매물 아이디 0번 매입 후 이벤트 생성 및 매입자 정보와 buyers 배열 테스팅", function(){
        return RealEstate.deployed().then(function(instance){
            realEstateInstance = instance;
            return realEstateInstance.buyRealEstate(0, "Rooney", 28, {from:accounts[1],value: web3.toWei(1.50, "ether")});
        }).then(function(receipt){
            assert.equal(receipt.logs.length, 1, "이벤트 하나가 생성되지 않았습니다.");
            assert.equal(receipt.logs[0].event, "LogBuyRealEstate", "이벤트가 LogBuyRealEstate가 아닙니다.");
            assert.equal(receipt.logs[0].args._buyer, accounts[1], "매입자가 가나슈 두번째 계정이 아닙니다.");
            assert.equal(receipt.logs[0].args._id, 0, "매물아이디가 0이 아닙니다.")
            return realEstateInstance.getBuyerInfo(0);
        }).then(function(buyerInfo){
            assert.equal(buyerInfo[0].toUpperCase(), accounts[1].toUpperCase(), "매입자의 계정이 가나슈 두번째 계정과 일치하지 않습니다.")
            //매입자의 이름이 hex 형태이므로 이를 string으로 바꿔줘야함. toAscii를 쓰면 뒤에 0000부분이 변환되면서 유니코드가 붙게되어서 이를 제거해야함
            assert.equal(web3.toAscii(buyerInfo[1]).replace(/\0/g, ''), "Rooney", "매입자의 이름이 다릅니다.");
            assert.equal(buyerInfo[2], 28, "매입자의 나이가 다릅니다. ")
            return realEstateInstance.getAllBuyers();
        }).then(function(buyers){
            assert.equal(buyers[0].toUpperCase(), accounts[1].toUpperCase(),"Buyers 배열이 다릅니다.")
        })
    })
}); 
