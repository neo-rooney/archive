import React , { Component }from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';

import Home from './routes/Home';
import About from './routes/About';
import Board from './routes/Board';
import Header from './components/Header';
import logo2 from '../src/hitup_logo.png'

const particleOpt = {
          particles: {
            number: {
              value:150,
              density:{
                enable:true,
                value_area: 800
              }
            }
          }
}


class App extends Component{
  render() {
    return (
      <div>
      <Particles 
              params={particleOpt}
              className ="particle"
            />
    <Router>
      <div id="position">
        
        <Header/>
        
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/board" component={Board}/>
      </div>

      <div className="twoback">
      
            
          </div>
    <footer class ="footer"> 
      <p>
      <img className="logo2" src={logo2} alt="A logo2 "/>
      <span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
      　　　　(주) Hit Up | 대표 : 배철훈 | 서울 금천구 가산디지털1로 226 에이스하이엔드타워5차 1103호 | TEL: 02-6954-1500 | FAX: 02-6954-1661</span>
      <hr style={{borderColor:"gray", marginLeft:250,marginRight:250}}/>
      </p>
      <span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
      Copyright © 2019 HITUP Inc. All rights reserved.
      </span>
      </footer> 
    </Router>
   
   
    </div>
    );
  };
}
export default App;