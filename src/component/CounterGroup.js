import React,{Component} from 'react'
import Counter from './Counter'
import '../component-css/counter.css';

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state={summary:0};
  }
  createCounter(){
    return <Counter updateSum={this.updateSum}/>;
  }
  updateSum=(num)=>{
    this.setState(prevState=>({
      summary:prevState.summary+num
    }));
  }
  createMultipleCounters(size){
    let counters=[];
    for (let i = 0; i < size; i++) {
      counters.push(this.createCounter());
    }
    return counters;
  }

  render(){
    return(
      <div class="group">
        {this.createMultipleCounters(this.props.size)}
        <p>Now,&nbsp;The Summary Is <span class="sum">{this.state.summary}</span></p>
      </div>

    )
  }
}
