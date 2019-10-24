pragma solidity >=0.4.21 <0.5.0;
import "installed_contracts/oraclize-api/contracts/usingOraclize.sol";

contract Hitup is usingOraclize{
//struct used to store the user information
	struct User {
		address userAddress;
        uint guess;
        string bettingEthPrice;
        uint bettingTime;
        uint256 fee;
        uint256 WinOrLose;
	}
    mapping (uint => User) public users;
    
    address public owner;
    uint256 private user_index = 0;

    uint256 private _pot;
    uint256 constant internal BET_AMOUNT = 1 * 10 ** 18;
    string[] public oracle_Eth;
    string public standard_Eth;
    string public next_Eth;
    
    uint public startTime ;
    uint public closeTime ;

    address[] public userAddresses;
    address[] public winnerAddresses;
    uint public winnerNumber = 0;
    
    //--------------------------------------------------------oraclize---------------------------------------  
   
    event LogInfo(string description);
    event LogPriceUpdate(string price);
    event LogUpdate(address indexed _owner, uint indexed _balance);


    /**
     * @dev constructor
     */
    constructor()
    payable
    public {
        owner = msg.sender;

        setTime();
        emit LogUpdate(owner, address(this).balance);
        OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
        // Replace the next line with your version:
        
        update();
    }

    function setTime()internal {
        startTime = 1571905800;
        closeTime  = startTime + 1800;
    }

    function choice_transfer()public {
        choice_winnerAddress();
        transferAfterPayingFee();
    }
    
    function closeGame()public {
        uint thisTime = now;
        // require(thisTime >= closeTime);
        
        startTime = closeTime;
        closeTime  = startTime + 1800;
        
        standard_Eth = oracle_Eth[1];
        delete oracle_Eth;
        oracle_Eth.push(standard_Eth);
        
        _pot = 0;
        user_index = 0;
        winnerNumber = 0;
        
    }

    function getPot() public view returns (uint256){
        return _pot;
    }

    function getStandardETH() public view returns (string){
        standard_Eth = oracle_Eth[0] ;  
        return standard_Eth;
    }

    function bet(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        // Push bet to the queue
        require(pushUserInfo(_userGuess), "Fail to add a new Bet Info");
        //Check betting time
        uint thisTimeToBetting = now;
        require(startTime<=thisTimeToBetting && thisTimeToBetting<closeTime);
        _pot += BET_AMOUNT;
        return true;
	}

     function getUserInfo(uint256 index) public view returns (address userAddress, uint guess, string bettingEthPrice, uint bettingTime, uint256 fee) {
        User memory b = users[index];
        userAddress = b.userAddress;       
        guess = b.guess;
        bettingEthPrice = b.bettingEthPrice;
        bettingTime = b.bettingTime;
        fee = b.fee;
    }

     function pushUserInfo(uint guess) internal returns (bool) {
        uint UserBettingTime = now;
        User memory b;
        b.userAddress = msg.sender; // 20 byte
        b.guess = guess;
        b.bettingEthPrice = standard_Eth;
        b.bettingTime = UserBettingTime;
        b.fee = calculateFee(UserBettingTime);
        
        users[user_index] = b;
        user_index ++;
        return true;
    }
      function calculateFee(uint UserBettingTime) internal returns (uint256){
        if (startTime<=UserBettingTime && UserBettingTime<startTime+ 300 ){
            return 0;
        }
        if (startTime+ 300<=UserBettingTime && UserBettingTime<startTime+ 600 ){
             return BET_AMOUNT/10;
        }
        if (startTime+ 600<=UserBettingTime && UserBettingTime<startTime+ 900 ){
            return BET_AMOUNT/5;
        }
        if (startTime+ 900<=UserBettingTime && UserBettingTime<startTime+ 1200 ){
            return (BET_AMOUNT*3)/10;
        }
        if (startTime+ 1200<=UserBettingTime && UserBettingTime<startTime+ 1500){
            return (BET_AMOUNT*2)/5;
        }
        if (startTime+ 1500 <=UserBettingTime && UserBettingTime<startTime+ 1800 ){
            return (BET_AMOUNT)/2;
        }
    }
    
    function stringToUint(string memory s) internal pure returns (uint result) {
        bytes memory b = bytes(s);
        uint i;
        result = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
    }
    function getEthStatus() internal view returns (uint256) {
      
        uint a = stringToUint(oracle_Eth[0]);//standard_Eth
        uint b = stringToUint(oracle_Eth[1]);//next_Eth
        
        if(a > b) { //down
            return 0;
        }

        if(a < b) { //Up
            return 1;
        }

        return 2; //maintain
    }
    
    function choice_winnerAddress() public {
        for(uint i = 0; i < user_index; i++){
            User memory user= users[i];
            
            if (getEthStatus() == 0 && user.guess == 0){
                winnerAddresses.push(user.userAddress);
                users[i].WinOrLose = 1;
                winnerNumber++;
                }
            else if (getEthStatus() == 1 && user.guess == 1){
                winnerAddresses.push(user.userAddress);
                users[i].WinOrLose = 1;
                winnerNumber++;
                }
            else if (getEthStatus() == 2 && user.guess == 2){
                winnerAddresses.push(user.userAddress);
                users[i].WinOrLose = 1;
                winnerNumber++;
                }
            else{
                users[i].WinOrLose = 0;
            }
        }
    
    }
    
    function transferAfterPayingFee() public payable returns (bool) {
        for(uint i = 0; i <user_index; i++){
            User memory user= users[i];
            uint256 fee = user.fee;
            uint256 amountWithoutFee = (_pot/winnerNumber) - fee;
            // transfer to owner
            owner.transfer(fee);
             // transfer to winneres
            if(user.WinOrLose == 1){
               user.userAddress.transfer(amountWithoutFee);
            }
        }
        return true;
    }
 
 //--------------------------------------------------------oraclize--------------------------------------- 
    // Fallback function
    function()
    external{
        revert();
    }

    function __callback(bytes32 id, string  result, bytes memory proof)
    public {
        require(msg.sender == oraclize_cbAddress());

        oracle_Eth.push(result);
        emit LogPriceUpdate(result);
        // update();
    }

    function getBalance()
    public
    view
    returns (uint _balance) {
        return address(this).balance;
    }

    function update()
    payable
    public {
        // Check if we have enough remaining funds
        if (oraclize_getPrice("URL") > address(this).balance) {
            emit LogInfo("Oraclize query was NOT sent, please add some ETH to cover for the query fee");
        } else {
            emit LogInfo("Oraclize query was sent, standing by for the answer..");

            // Using XPath to to fetch the right element in the JSON response, 시간간격 해결하기
            oraclize_query("URL", "json(https://api.bithumb.com/public/ticker/ETH).data.closing_price");
        }
    }


}
