import emitter from '../js/events';

class Aboutchild2 extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    //调用context中的回调方法
    this.context.callback('hahaha');
  }

  //通过emitter指定自定义事件
  componentDidMount(){
    this.eventEmitter = emitter.addListener('callMe',function(msg) {
      console.log('some one tell child2 : '+msg);
    })
  }

  //在被注销时需要移除事件
  componentWillUnmount(){
    emitter.removeAllListeners('callMe');
  }

  render(){
    return <p>我是child2,我要<button onClick={this.handleClick}>发布消息</button></p>
  }
}

//子组件声明自己要使用context
Aboutchild2.contextTypes = {
  callback : PropTypes.func
}
export default Aboutchild2;