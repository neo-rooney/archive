import React , { Component }from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';

import Manual from './routes/Manual';
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
        
        <Route exact path="/Manual" component={Manual}/>
        <Route exact path="/Home" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Board" component={Board}/>
      </div>

      <div className="twoback">
      
            
          </div>
    
    </Router>
   
   
    </div>
    );
  };
}
export default App;