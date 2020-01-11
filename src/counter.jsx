import React, { Component } from "react";
import { connect } from "react-redux";
import { connectWithLifecycle } from "react-lifecycle-component";
import logo from "./hierarchy.jpg";

class Counter extends Component {
  componentWillMount() {
    console.log("componentWillMount inside component --before render");
  }

  componentDidMount() {
    console.log("componentDidMount inside component --after render");
  }
  shouldComponentUpdate() {
    //console.log("component should update in A");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate inside component --before render");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate inside component --after render");
  }
  render() {
    return (
      <div>
        <img src={logo} width="500" height="300" />
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
      console.log("*******MOUNTING PHASE*********");
      console.log(
        "componentWillmount inside mapDispatchToProps --before render"
      );
    },
    componentDidMount: () => {
      console.log("componentDidmount inside mapDispatchToProps --after render");
    },
    componentWillUpdate: () => {
      console.log("*******UPDATION PHASE*********");
      console.log(
        "componentWillUpdate inside mapDispatchToProps --before render"
      );
    },
    componentDidUpdate: () => {
      console.log(
        "componentDidUpdate inside mapDispatchToProps --after render"
      );
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
