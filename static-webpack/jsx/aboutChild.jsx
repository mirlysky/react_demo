import emitter from '../js/events';

class Aboutchild extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  //子组件调用父组件传过来的cbk，从而实现反向通信
  handleClick(e){
    this.props.cbk('hhh');
  }

  //通过emitter类似于广播事件
  handleClick2(e){
    emitter.emit('callMe','hello');
  }

  render(){
    return  <div> 
              <p><button onClick={this.handleClick}>to father</button></p>
              <p><button onClick={this.handleClick2}>to child2</button></p>
            </div>
  }
}

export default Aboutchild;