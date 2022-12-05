pragma solidity >=0.4.21 <0.5.0;
import "installed_contracts/oraclize-api/contracts/usingOraclize.sol";

contract Hitup_main is usingOraclize{
	struct User {
		address userAddress;
        uint guess;
        string bettingExchangeRate;
        uint bettingTime;
        uint256 fee;
        uint256 WinOrLose;
	}
    mapping (address => uint) public user_index_mapping;
    mapping (uint256 => User) public users;
    
    address public owner;
    uint256 private user_index = 0;

    uint256 internal _pot;
    uint256 constant internal BET_AMOUNT = 1 * 10 ** 18;
    string[] internal oracleExchangeRate;
    string internal standardExchangeRate;
    string internal nextExchangeRate;
    
    address[] public userAddresses;
    address[] public winnerAddresses;
    uint internal winnerNumber = 0;
    
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

        emit LogUpdate(owner, address(this).balance);
        OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
        update();
    }

    
    function getOwner() public view returns (address){
        return owner;
    }

    function getPot() public view returns (uint256){
        return _pot;
    }

    function getStandardExchangeRate() public view returns (string){
        standardExchangeRate = oracleExchangeRate[0] ;  
        return standardExchangeRate;
    }

    function getOracleExchangeRate0() public view returns (string){
       return oracleExchangeRate[0];
    }
    function getOracleExchangeRate1() public view returns (string){
       return oracleExchangeRate[1];
    }
    
    function pushUserInfo(uint guess, uint fee) internal returns (bool) {
        uint UserBettingTime = now;
        User memory b;
        b.userAddress = msg.sender; // 20 byte
        b.guess = guess;
        b.bettingExchangeRate = oracleExchangeRate[0];
        b.bettingTime = UserBettingTime;
        b.fee = fee;
        users[user_index] = b;
        user_index_mapping[msg.sender] = user_index;
        user_index ++;
        return true;
    }

    function bet_Mon(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        require(pushUserInfo(_userGuess, 0), "Fail to add a new Bet Info");  
        _pot += BET_AMOUNT;
        return true;
    }

    function bet_Tue(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        require(pushUserInfo(_userGuess, BET_AMOUNT/5), "Fail to add a new Bet Info");
        _pot += BET_AMOUNT;
        return true;
    }
    function bet_Wed(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        require(pushUserInfo(_userGuess, (BET_AMOUNT*3)/10), "Fail to add a new Bet Info");
        _pot += BET_AMOUNT;
        return true;
    }
    function bet_Thu(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        require(pushUserInfo(_userGuess, (BET_AMOUNT*2)/5), "Fail to add a new Bet Info");
        _pot += BET_AMOUNT;
        return true;
    }
    function bet_Fri(uint _userGuess) public payable returns (bool result){
        // Check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enough ETH");
        require(pushUserInfo(_userGuess, BET_AMOUNT/2), "Fail to add a new Bet Info");
        _pot += BET_AMOUNT;
        return true;
    }

    function getUserInfo(address _userAddress) public view returns (address userAddress, uint guess, string bettingExchangeRate, uint bettingTime, uint256 fee, uint256 WinOrLose) {
        uint256 a = user_index_mapping[_userAddress];
        User memory b = users[a];
        userAddress = b.userAddress;       
        guess = b.guess;
        bettingExchangeRate = b.bettingExchangeRate;
        bettingTime = b.bettingTime;
        fee = b.fee;
        WinOrLose = b.WinOrLose;
    }
    
    function choice_transfer()public {
        choice_winnerAddress();
        transferAfterPayingFee();
    }
    
    
    function stringToUint(string memory s) private pure returns (uint result) {
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
    
    function getExchangeRateStatus() private view returns (uint256) {
      
        uint a = stringToUint(oracleExchangeRate[0]);//standard_ExchangeRate
        uint b = stringToUint(oracleExchangeRate[1]);//next_ExchangeRate
        
        if(a > b) { //down
            return 0;
        }

        if(a < b) { //Up
            return 1;
        }

        return 2; //maintain
    }
    
    function choice_winnerAddress() private {
        for(uint i = 0; i < user_index; i++){
            User memory user= users[i];
            
            if (getExchangeRateStatus() == 0 && user.guess == 0){
                winnerAddresses.push(user.userAddress);
                users[i].WinOrLose = 1;
                winnerNumber++;
                }
            else if (getExchangeRateStatus() == 1 && user.guess == 1){
                winnerAddresses.push(user.userAddress);
                users[i].WinOrLose = 1;
                winnerNumber++;
                }
            else if (getExchangeRateStatus() == 2 && user.guess == 2){
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
    
    function closeGame()public {    
        _pot = 0;
        user_index = 0;
        winnerNumber = 0;
        
        standardExchangeRate = oracleExchangeRate[1];
        delete oracleExchangeRate;
        oracleExchangeRate.push(standardExchangeRate);
        
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

        oracleExchangeRate.push(result);
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

            // oraclize_query("URL","json(https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=8zEeLCO4qHk9mCYAfsLP6dUxrOTVxq1t&searchdate=&data=AP01).[21].kftc_deal_bas_r");
            oraclize_query("URL","json(https://api.bithumb.com/public/ticker/ETH).data.closing_price");
        }
    }
}