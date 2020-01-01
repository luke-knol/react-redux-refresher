import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  }

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case 'inc':
  //       this.setState((prevState) => { return { counter: prevState.counter + 1 } })
  //       break;
  //     case 'dec':
  //       this.setState((prevState) => { return { counter: prevState.counter - 1 } })
  //       break;
  //     case 'add':
  //       this.setState((prevState) => { return { counter: prevState.counter + value } })
  //       break;
  //     case 'sub':
  //       this.setState((prevState) => { return { counter: prevState.counter - value } })
  //       break;
  //   }
  // }

  render() {
    let value = 5;
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label={"Add " + value} clicked={() => this.props.onIncrementCounterByValue(value)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onDecrementCounterByValue(5)} />
        {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} /> */}
        {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onIncrementCounterByValue: (value) => dispatch({ type: 'INCREMENT_BY', value }),
    onDecrementCounterByValue: (value) => dispatch({ type: 'DECREMENT_BY', value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);