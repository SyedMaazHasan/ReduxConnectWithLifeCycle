import React, { Component } from "react";
import { connect } from "react-redux";
import { connectWithLifecycle } from "react-lifecycle-component";

class Counter extends Component {
  componentWillMount() {
    console.log("componentWillMount inside component");
  }

  componentDidMount() {
    console.log("componentDidMount inside component");
  }
  shouldComponentUpdate() {
    //console.log("component should update in A");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate inside component");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate inside component");
  }
  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.handleIncrease}> Increase </button>
        <button onClick={this.props.handleDecrease}> Decrease </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    componentWillMount: () => {
      console.log("componentwillmount inside mapDispatchToProps");
    },
    componentDidMount: () => {
      console.log("componentdidmount inside mapDispatchToProps");
    },
    componentWillUpdate: () => {
      console.log("componentdidmount inside mapDispatchToProps");
    },
    componentDidUpdate: () => {
      console.log("componentdidmount inside mapDispatchToProps");
    },
    handleIncrease: () => dispatch({ type: "INCREMENT" }),
    handleDecrease: () => dispatch({ type: "DECREMENT" })
  };
}

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
//below won't work because we are passing lifecycle methods in mapDispatchToProps
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
