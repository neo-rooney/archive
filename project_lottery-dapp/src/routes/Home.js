import React , { Component }from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from '../hitup_logo.png'
import './footer.css';
import Web3 from 'web3';
import './Home.css';
let hitupAddress = '0xfa971a93e1227b4640bf6a5b1d5c8c5085a79a5d';
let hitupABI = [{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "winnerAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "user_index_mapping","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "users","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "userAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": true,"stateMutability": "payable","type": "constructor"},{"payable": false,"stateMutability": "nonpayable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": false,"name": "description","type": "string"}],"name": "LogInfo","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "price","type": "string"}],"name": "LogPriceUpdate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_owner","type": "address"},{"indexed": true,"name": "_balance","type": "uint256"}],"name": "LogUpdate","type": "event"},{"constant": true,"inputs": [],"name": "getOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getStandardExchangeRate","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate0","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate1","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Mon","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Tue","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Wed","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Thu","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Fri","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [{"name": "_userAddress","type": "address"}],"name": "getUserInfo","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "choice_transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "transferAfterPayingFee","outputs": [{"name": "","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [],"name": "closeGame","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "id","type": "bytes32"},{"name": "result","type": "string"},{"name": "proof","type": "bytes"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "myid","type": "bytes32"},{"name": "result","type": "string"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getBalance","outputs": [{"name": "_balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "update","outputs": [],"payable": true,"stateMutability": "payable","type": "function"}];
class Home extends Component{
  constructor(props) {
    super(props);

    this.state ={
      betRecords:[],
      winRecords:[],
      failRecords:[],
      pot :'0',
      standardExchangeRate:'200000',
      currentExchangeRate:'1,688.4',
      guess :[1,1,1,1,1],
      guessString :['Not yet','Not yet','Not yet','Not yet','Not yet']
      
    }
  }
  async componentDidMount(){
    await this.initWeb3();
    //setInterval(this.pollData. 10000);
    await this.getPot();
    await this.getStandardExchangeRate();
    this.getCurrentExchangeRate();
    
  }

  // pollData = async () => {
    
  // }
  
  initWeb3 = async() => {
    if (window.ethereum) {
      console.log('Recent mode')
      this.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        // this.web3.eth.sendTransaction({/* ... */});
      } catch (error) {
        // User denied account access...
        console.log(`User denide account access error : ${error}`)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      console.log('legacy mode')
      this.web3 = new Web3(Web3.currentProvider);
      // Acccounts always exposed
      // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    let accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];

    this.hitupContract = new this.web3.eth.Contract(hitupABI, hitupAddress);
    
  }
  getPot = async() => {
    let pot = await this.hitupContract.methods.getPot().call();
    let potString = this.web3.utils.fromWei(pot.toString(), 'ether');
    this.setState({pot:potString})
  }
  
  getStandardExchangeRate = async() => {
    let standardExchangeRate = await this.hitupContract.methods.getStandardExchangeRate().call();
    this.setState({standardExchangeRate:standardExchangeRate})
    console.log(standardExchangeRate);
  }

  getCurrentExchangeRate = () => {
    // var url = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=8zEeLCO4qHk9mCYAfsLP6dUxrOTVxq1t&searchdate=&data=AP01';
    var url = 'https://api.bithumb.com/public/ticker/ETH';
    
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
  
   fetch(url)
   .then(response=>response.json())
   .then(res=>{
     this.setState({
      // currentExchangeRate:res[21].kftc_deal_bas_r
      currentExchangeRate:res.data.closing_price
     })
     console.log(res)
    //  console.log(res[21].kftc_deal_bas_r)
     console.log(this.state.guessString[0])
    })

    setInterval(()=>{
      var date = new Date();
      var hour = date.getHours();
      console.log(hour);
     fetch(url)
     .then(response=>response.json())
     .then(res=>{
       this.setState({
        // currentExchangeRate:res[21].kftc_deal_bas_r
        currentExchangeRate:res.data.closing_price
       })
       console.log(res)
      //  console.log(res[21].kftc_deal_bas_r)
       console.log(this.state.guessString[0])
      }) 
  },50000) 

}
  
bet_Mon = async () => {
  let guess = this.state.guess[0]
  await this.hitupContract.methods.bet_Mon(guess).send({from:this.account, value:1000000000000000000, gas:300000, })
  .on('transactionHash', (hash) =>{
    console.log(hash)
  })
  // await console.log(data1)
}

  getUpDownString_Mon = (_Character,_buttonStyle)=>{
    let _string = 'UP';
    if (_Character === 0){
      _string = 'DOWN';
    }
    if (_Character === 1){
      _string = 'UP';
    }
    return(
      <button className={_buttonStyle} onClick = { () => {
        this.onClickCard_Mon(_Character)
      }} >
        {_string}
      </button>
    )
  }

  onClickCard_Mon = (_Character) => {
      this.state.guess[0] = _Character
      if(this.state.guess[0] ===1){
        this.state.guessString[0] = 'UP'
      }
      if(this.state.guess[0] ===0){
        this.state.guessString[0] = 'DOWN'
      }
      console.log(this.state.guess[0])
      console.log(this.state.guessString[0])
      this.componentDidMount()
  }

  bet_Tue = async () => {
    let guess = this.state.guess[1]
    await this.hitupContract.methods.bet_Tue(guess).send({from:this.account, value:1000000000000000000, gas:300000, })
    .on('transactionHash', (hash) =>{
      console.log(hash)
    })
    // await console.log(data1)
  }

  getUpDownString_Tue = (_Character,_buttonStyle)=>{
    let _string = 'UP';
    if (_Character === 0){
      _string = 'DOWN';
    }
    if (_Character === 1){
      _string = 'UP';
    }
    return(
      <button className={_buttonStyle} onClick = { () => {
        this.onClickCard_Tue(_Character)
      }} >
        {_string}
      </button>
    )
  }

  onClickCard_Tue = (_Character) => {
      this.state.guess[1] = _Character
      if(this.state.guess[1] ===1){
        this.state.guessString[1] = 'UP'
      }
      if(this.state.guess[1] ===0){
        this.state.guessString[1] = 'DOWN'
      }
      console.log(this.state.guess[1])
      console.log(this.state.guessString[1])
      this.componentDidMount()
  }

  bet_Wed = async () => {
    let guess = this.state.guess[2]
    await this.hitupContract.methods.bet_Wed(guess).send({from:this.account, value:1000000000000000000, gas:300000, })
    .on('transactionHash', (hash) =>{
      console.log(hash)
    })
    // await console.log(data1)
  }

  getUpDownString_Wed= (_Character,_buttonStyle)=>{
    let _string = 'UP';
    if (_Character === 0){
      _string = 'DOWN';
    }
    if (_Character === 1){
      _string = 'UP';
    }
    return(
      <button className={_buttonStyle} onClick = { () => {
        this.onClickCard_Wed(_Character)
      }} >
        {_string}
      </button>
    )
  }

  onClickCard_Wed = (_Character) => {
      this.state.guess[2] = _Character
      if(this.state.guess[2] ===1){
        this.state.guessString[2] = 'UP'
      }
      if(this.state.guess[2] ===0){
        this.state.guessString[2] = 'DOWN'
      }
      console.log(this.state.guess[2])
      console.log(this.state.guessString[2])
      this.componentDidMount()
  }
  
  bet_Thu = async () => {
    let guess = this.state.guess[3]
    await this.hitupContract.methods.bet_Thu(guess).send({from:this.account, value:1000000000000000000, gas:300000, })
    .on('transactionHash', (hash) =>{
      console.log(hash)
    })
    // await console.log(data1)
  }

  getUpDownString_Thu= (_Character,_buttonStyle)=>{
    let _string = 'UP';
    if (_Character === 0){
      _string = 'DOWN';
    }
    if (_Character === 1){
      _string = 'UP';
    }
    return(
      <button className={_buttonStyle} onClick = { () => {
        this.onClickCard_Thu(_Character)
      }} >
        {_string}
      </button>
    )
  }

  onClickCard_Thu = (_Character) => {
      this.state.guess[3] = _Character
      if(this.state.guess[3] ===1){
        this.state.guessString[3] = 'UP'
      }
      if(this.state.guess[3] ===0){
        this.state.guessString[3] = 'DOWN'
      }
      console.log(this.state.guess[3])
      console.log(this.state.guessString[3])
      this.componentDidMount()
  }

  bet_Fri = async () => {
    let guess = this.state.guess[4]
    await this.hitupContract.methods.bet_Fri(guess).send({from:this.account, value:1000000000000000000, gas:300000, })
    .on('transactionHash', (hash) =>{
      console.log(hash)
    })
    // await console.log(data1)
  }

  getUpDownString_Fri= (_Character,_buttonStyle)=>{
    let _string = 'UP';
    if (_Character === 0){
      _string = 'DOWN';
    }
    if (_Character === 1){
      _string = 'UP';
    }
    return(
      <button className={_buttonStyle} onClick = { () => {
        this.onClickCard_Fri(_Character)
      }} >
        {_string}
      </button>
    )
  }

  onClickCard_Fri = (_Character) => {
      this.state.guess[4] = _Character
      if(this.state.guess[4] ===1){
        this.state.guessString[4] = 'UP'
      }
      if(this.state.guess[4] ===0){
        this.state.guessString[4] = 'DOWN'
      }
      console.log(this.state.guess[4])
      console.log(this.state.guessString[4])
      this.componentDidMount()
  }
  getTodayLabel =() => {
    
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    
    var today = new Date().getDay();
    var todayLabel = week[today];
    
    return todayLabel;
}

  getHourLabel =() => {
  var today = new Date();  
  var hours = today.getHours();

  return hours
}

  getMinuteLabel =() => {
  var today = new Date();  
  var minute = today.getHours();

  return minute
}


render() {
  return (
    <div className="Home">
             {/* {Header - Pot, Betting characters} */}
             <img className="logo" src={logo} alt="A logo "/>
      <div className="container">
        <div className="pocket">
          <br></br>
          <br></br>
          <h1>Pot money : {this.state.pot}</h1>
          <br></br>
          <h2>Standard ETH - WON :{this.state.standardExchangeRate} </h2>
          <br></br>
          <h2>Current ETH - WON :{this.state.currentExchangeRate} </h2>
          <br></br>
        </div>         
      </div>
        <div className="day-card" > 
          <h2>Mon</h2>
          <span>BETTING TIME</span>
          <p>12:00 ~ 23:59</p>
          <span>Fee</span>
          <p>0 ETH</p>
          <h5>Your Bet</h5>
          <p>{this.state.guessString[0]}</p>
          <div className="upDownButton" >
            {this.getUpDownString_Mon(1,'btn btn-outline-danger btn-lg')}
            <br></br>
            <br></br>
            {this.getUpDownString_Mon(0,'btn btn-outline-primary btn-lg')}
          </div>
          <br></br>
          {this.getTodayLabel() === '월요일' && 
           this.getHourLabel() >= 12 &&
           this.getHourLabel() <= 23 &&
           this.getMinuteLabel() >= 0 &&
           this.getMinuteLabel() <= 59 &&
          <button className='btn btn-outline-success' onClick={this.bet_Mon}>BET!</button>
          }
        </div>
        <div className="day-card" > 
          <h2>Tue</h2>
          <span>BETTING TIME</span>
          <p>12:00 ~ 23:59</p>
          <span>Fee</span>
          <p>0.2 ETH</p>
          <h5>Your Bet</h5>
          <p>{this.state.guessString[1]}</p>
          <div className="upDownButton" >
            {this.getUpDownString_Tue(1,'btn btn-outline-danger btn-lg')}
            <br></br>
            <br></br>
            {this.getUpDownString_Tue(0,'btn btn-outline-primary btn-lg')}
          </div>
          <br></br>
          {this.getTodayLabel() === '화요일' &&
          this.getHourLabel() >= 9 &&//12로 나중에 바꾸기
          this.getHourLabel() <= 23 &&
          this.getMinuteLabel() >= 0 &&
          this.getMinuteLabel() <= 59 &&
          <button className='btn btn-outline-success' onClick={this.bet_Tue}>BET!</button>
          }
        </div>
        <div className="day-card" > 
          <h2>Wed</h2>
          <span>BETTING TIME</span>
          <p>12:00 ~ 23:59</p>
          <span>Fee</span>
          <p>0.3 ETH</p>
          <h5>Your Bet</h5>
          <p>{this.state.guessString[2]}</p>
          <div className="upDownButton" >
            {this.getUpDownString_Wed(1,'btn btn-outline-danger btn-lg')}
            <br></br>
            <br></br>
            {this.getUpDownString_Wed(0,'btn btn-outline-primary btn-lg')}
          </div>
          <br></br>
          {this.getTodayLabel() === '수요일' &&
          this.getHourLabel() >= 12 &&
          this.getHourLabel() <= 23 &&
          this.getMinuteLabel() >= 0 &&
          this.getMinuteLabel() <= 59 &&
          <button className='btn btn-outline-success' onClick={this.bet_Wed}>BET!</button>
          }
          
        </div>
        <div className="day-card" > 
          <h2>Thr</h2>
          <span>BETTING TIME</span>
          <p>12:00 ~ 23:59</p>
          <span>Fee</span>
          <p>0.4 ETH</p>
          <h5>Your Bet</h5>
          <p>{this.state.guessString[3]}</p>
          <div className="upDownButton" >
            {this.getUpDownString_Thu(1,'btn btn-outline-danger btn-lg')}
            <br></br>
            <br></br>
            {this.getUpDownString_Thu(0,'btn btn-outline-primary btn-lg')}
          </div>
          <br></br>
          {this.getTodayLabel() === '목요일' &&
          this.getHourLabel() >= 12 &&
          this.getHourLabel() <= 23 &&
          this.getMinuteLabel() >= 0 &&
          this.getMinuteLabel() <= 59 &&
          <button className='btn btn-outline-success' onClick={this.bet_Thu}>BET!</button>
          }
        </div>
        <div className="day-card" > 
          <h2>Fri</h2>
          <span>BETTING TIME</span>
          <p>12:00 ~ 23:59</p>
          <span>Fee</span>
          <p>0.5 ETH</p>
          <h5>Your Bet</h5>
          <p>{this.state.guessString[4]}</p>
          <div className="upDownButton" >
            {this.getUpDownString_Fri(1,'btn btn-outline-danger btn-lg')}
            <br></br>
            <br></br>
            {this.getUpDownString_Fri(0,'btn btn-outline-primary btn-lg')}
          </div>
          <br></br>
          {this.getTodayLabel() === '금요일' &&
          this.getHourLabel() >= 12 &&
          this.getHourLabel() <= 23 &&
          this.getMinuteLabel() >= 0 &&
          this.getMinuteLabel() <= 59 &&
          <button className='btn btn-outline-success' onClick={this.bet_Fri}>BET!</button>
          }
        </div>
        <div id ="FooterWrap_home">
        <footer class ="footer"> 
      <p>
      <img className="logo2" src={logo} alt="A logo2 "/>
      　<span>
      　(주) Hit Up | 대표 : 이인학 | 서울 강남구 현대디지털1로 226 에이스하이엔드타워5차 1103호 | TEL: 070-4823-7860 | FAX: 02-4823-7860 /></span>
      <hr style={{borderColor:"gray", marginLeft:250,marginRight:250}}/>
      </p>
      <span>Copyright © 2019 HITUP Inc. All rights reserved.</span>
      
      </footer> 
          
        </div>
    </div>
  );
}

}

export default Home;
