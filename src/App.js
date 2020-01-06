import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count: 0
  };
  plus = () => {
      this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
      this.setState(current => ({count: current.count -1}));
  }
  render(){
      return( 
          <div>
            <h1>Im a class {this.state.count}</h1>
            <button onClick={this.plus}>Plus</button>
            {/* 괄호가 없는것은 누를때만 실행, 괄호 써주면 즉시 실행하는것 */}
            <button onClick={this.minus}>Minus</button>  
          </div>
    ) 
  }
}

export default App;
