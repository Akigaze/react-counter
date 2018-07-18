import React,{Component} from 'react'

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
  }
  countDown(){
    let currentNum=this.state.count;
    this.setState({count:currentNum-1});
  }
  render() {
    return(
      <div>
        <button className="btn" onClick={this.countUp}>+</button>
        <button className="btn" onClick={this.countDown}>-</button>
        <p>
          count:
          <span>{this.state.count}</span>
        </p>
      </div>
    );
  }

}
