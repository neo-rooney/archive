import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// dipatch를 전달하는 부분에 객체 형태로 넣어주면
// connect 함수 내부적으로 bindActionCreators 동작이 수행된다.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
