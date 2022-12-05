pragma solidity ^0.4.23;

contract RealEstate {
    //매입자 정보 구조체
    struct Buyer {
        address buyerAddress;
        bytes32 name;
        uint age;
    }
    //매물의 아이디를 key값으로 하여 매입자의 정보를 불러오는 구조
    mapping (uint => Buyer) public buyerInfo;
    
    address public owner;
    address[10] public buyers;
    
    //어떤 이벤트가 생성되었을때 이벤트의 내용도 블록체인안에 저장된다
    event LogBuyRealEstate(
        address _buyer,
        uint _id
    );
   
    constructor() public {
        owner = msg.sender;
    } 

    function buyRealEstate(uint _id, bytes32 _name, uint _age)public payable {
        //매물 유효성 검사
        require(_id >= 0 && _id <=9);
        //매개변수로 받은 id를 인덱스값으로 써서 구매자의 주소를 배열에 저장
        buyers[_id] = msg.sender;
        //매물의 아이디를 key값으로 하여 매입자의 정보를 구조체의 value값으로 저장
        buyerInfo[_id] = Buyer(msg.sender, _name, _age);
        //eth를 계정과 계정으로 이동할때 transfer함수 사용
        //msg.value는 Wei만 허용, owner에게 eth를 전송
        owner.transfer(msg.value);
        //이벤트를 발생
        emit LogBuyRealEstate(msg.sender, _id);
   }
    //매입자의 정보를 불러오는 함수
   function getBuyerInfo(uint _id) public view returns (address, bytes32, uint){
       //id를 key값으로 하여  맵핑된 value를 가져와서 Buyer구조체 타입의 buyer 변수에 저장한다. 
       //memory를 써서 함수가 종료되면 buyer변수가 값을 잊도록 만든다.
       Buyer memory buyer = buyerInfo[_id];
       return (buyer.buyerAddress, buyer.name, buyer.age);
   }
   function getAllBuyers() public view returns (address[10]){
       return buyers;
   }
}
