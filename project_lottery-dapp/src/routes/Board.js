import React, { Component } from 'react';
import BoardForm from './App6_BoardForm';
import BoardItem from './App6_BoardItem';
import './Board.css'
import './footer.css';
import Web3 from 'web3';
import './Home.css';
/*
    component files.
*/
let hitupAddress = '0x466e4371a61e2de00b9f96bc8e5512654ada58ee';
let hitupABI =[{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "winnerAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "user_index_mapping","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "users","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "userAddresses","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": true,"stateMutability": "payable","type": "constructor"},{"payable": false,"stateMutability": "nonpayable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": false,"name": "description","type": "string"}],"name": "LogInfo","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "price","type": "string"}],"name": "LogPriceUpdate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_owner","type": "address"},{"indexed": true,"name": "_balance","type": "uint256"}],"name": "LogUpdate","type": "event"},{"constant": true,"inputs": [],"name": "getOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getStandardExchangeRate","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate0","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOracleExchangeRate1","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Mon","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Tue","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Wed","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Thu","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_userGuess","type": "uint256"}],"name": "bet_Fri","outputs": [{"name": "result","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [{"name": "_userAddress","type": "address"}],"name": "getUserInfo","outputs": [{"name": "userAddress","type": "address"},{"name": "guess","type": "uint256"},{"name": "bettingExchangeRate","type": "string"},{"name": "bettingTime","type": "uint256"},{"name": "fee","type": "uint256"},{"name": "WinOrLose","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "choice_transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "transferAfterPayingFee","outputs": [{"name": "","type": "bool"}],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [],"name": "closeGame","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "id","type": "bytes32"},{"name": "result","type": "string"},{"name": "proof","type": "bytes"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "myid","type": "bytes32"},{"name": "result","type": "string"}],"name": "__callback","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getBalance","outputs": [{"name": "_balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "update","outputs": [],"payable": true,"stateMutability": "payable","type": "function"}];

class App6 extends Component {
    
    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ],
         selectedBoard:{}
    }
    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })            
        }
    }
    
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }
    
    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <table className="tbody2" border="1">
                    <tbody className="tbody" align="center">
                    <tr align="center">
                        <td width="150">No.</td>
                        <td width="700">Title</td>
                        <td width="300">Name</td>
                        <td width="300">Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
                <BoardForm className="BoardForm" selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
            </div>
        );
    }
}

export default App6;