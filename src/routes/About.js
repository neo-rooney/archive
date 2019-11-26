import React , { Component }from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from '../hitup_logo.png'
import './footer.css';
import Web3 from 'web3';
import './Home.css';
import './About.css';
let hitupAddress = '0xfa971a93e1227b4640bf6a5b1d5c8c5085a79a5d';
let hitupABI = [{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "winnerAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "user_index_mapping","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "users","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "userAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": true,"stateMutability": "payable","type": "constructor"},{"payable": false,"stateMutability": "nonpayable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": false,"name": "description","type": "string"}],"name": "LogInfo","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "price","type": "string"}],"name": "LogPriceUpdate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_owner","type": "address"},{"indexed": true,"name": "_balance","type": "uint256"}],"name": "LogUpdate","type": "event"},{"constant": true,"inputs": [],"name": "getOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getStandardExchangeRate","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate0","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate1","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Mon","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Tue","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Wed","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Thu","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Fri","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [{"name": "_userAddress","type": "address"}],"name": "getUserInfo","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "choice_transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "transferAfterPayingFee","outputs": [{"name": "","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [],"name": "closeGame","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "id","type": "bytes32"},{"name": "result","type": "string"},{"name": "proof","type": "bytes"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "myid","type": "bytes32"},{"name": "result","type": "string"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getBalance","outputs": [{"name": "_balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "update","outputs": [],"payable": true,"stateMutability": "payable","type": "function"}];

class About extends Component{
  constructor(props) {
    super(props);

    this.state ={
      betRecords:[],
      winRecords:[],
      failRecords:[],
      pot :'0',
      standardExchangeRate:'200000',
      currentExchangeRate:'200000',
      guess :[1,1,1,1,1],
      guessString :[],
      userAddress:'0x0000000000000000000000000000000000000000',
      challenge:'1',
      challeng_string:'',
      bettingExchangeRate:'20000',
      fee:'0'
    }

  }
  async componentDidMount(){
    await this.initWeb3();
    await this.getPot();
    await this.getStandardExchangeRate();
    this.getCurrentExchangeRate();
    await this.getUserInfo();
    await this.getUpDownString();
  }
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
getUserInfo = async() => {
  let account = await this.web3.eth.getAccounts();
  let userInfo = await this.hitupContract.methods.getUserInfo(account[0]).call();
  let userAddress = userInfo.userAddress;
  let challenge = userInfo.guess;
  let bettingExchangeRate = userInfo.bettingExchangeRate;
  let fee = userInfo.fee;
  let feeString = this.web3.utils.fromWei(fee.toString(), 'ether');
  this.setState({userAddress:userAddress});
  this.setState({challenge:challenge});
  this.setState({bettingExchangeRate:bettingExchangeRate});
  this.setState({fee:feeString});
}
getUpDownString= ()=>{
  let challenge = this.state.challenge;
  console.log(challenge)
  let _string
  if (challenge === '0'){
    this.setState({challeng_string:'DOWN'})
  }
  if (challenge === '1'){
    this.setState({challeng_string:'UP'})
  }
  console.log(this.state.challeng_string)
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
          <h2>Standard USD - KRW :{this.state.standardExchangeRate} </h2>
          <br></br>
          <h2>Current USD - KRW :{this.state.currentExchangeRate} </h2>
          <br></br>
        </div>         
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="two_back2"style={{marginTop:110}}>
        <br></br>
        <div className="manual_background" style={{marginTop:-113,color:'WHITE'}}>
               <br></br>
               <h1>My Page</h1>
                <hr style={{borderColor:"gray", marginLeft:500,marginRight:500}}/>
            </div>
        
        <div className="container" style={{marginleft:10,marginTop:80}}>
        
          <table className="table table-dark tabel-striped">
            <thead>
              <tr>
                <th>Address</th>
                <th>Challenge</th>
                <th>bettingExchangeRate</th>
                <th>fee</th>
              </tr>
              </thead>
              <tbody>
                      <tr>
                        <td> {this.state.userAddress}</td>
                        <td> {this.state.challeng_string}</td>
                        <td> {this.state.bettingExchangeRate}</td>
                        <td> {this.state.fee}</td>
                      </tr>
              </tbody> 
          </table>
        
        </div>
        <div id ="FooterWrap_mypage" style={{marginTop:545}}>
        <footer class ="footer"> 
      <p>
      <img className="logo2" src={logo} alt="A logo2 "/>
      　<span>
      　(주) Hit Up | 대표 : 이인학 | 서울 강남구 현대디지털1로 226 에이스하이엔드타워5차 1103호 | TEL: 070-4823-7860 | FAX: 02-4823-7860 /></span>
      <hr style={{borderColor:"gray", marginLeft:250,marginRight:250}}/>
      </p>
      <span>Copyright © 2019 HITUP Inc. All rights reserved.</span>
      
      </footer> 
    </div></div></div>
    );
  };
}
export default About;