import React,{Component} from 'react'

import '../component-css/counter.css';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0};
    //绑定的方式
    this.countDown = this.countDown.bind(this);
  }
  //箭头函数的方式
  countUp=()=>{
    let currentNum=this.state.count;
    this.setState({count:currentNum+1});
    this.props.updateSum(1);
  }
  countDown(){
    //setState支持Lambda表达式，第一个参数值为state原本的引用
    this.setState(prevState => ({
      count: prevState.count-1
    }));
    this.props.updateSum(-1);
  }
  render() {
    return(
      <div class="counter">
        <button className="btn" onClick={this.countUp}>+</button>
        <button className="btn" onClick={this.countDown}>-</button>
        <p>
          count:
          <span class="count">{this.state.count}</span>
        </p>
      </div>
    );
  }

}
