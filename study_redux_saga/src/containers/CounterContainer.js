import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

const CounterContainer = ({
  number,
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
}) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  { increase, decrease, increaseAsync, decreaseAsync }
)(CounterContainer);
