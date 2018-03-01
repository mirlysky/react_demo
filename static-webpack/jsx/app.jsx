import { connect } from 'react-redux';
import Sidebar from './sidebar';
import Home from './home';

class App extends React.Component{
  constructor(props){
    //此时APP的props中已经包括了store中的变量，dispatch也被注入到了props之中
    super(props);
    this.addNum = this.addNum.bind(this);
  }

  //发布action，从而修改state，state链接app的props，从而可以渲染页面
  addNum(){
    this.props.dispatch({type:'ADD'});
  }

  render(){
    return (
        <div className='app'>
          <div className='sidebar'>
            <Sidebar></Sidebar>
          </div>
          <div className='content'>
            {/*由于connect的存在，num被命名为了stateNum*/}
            <h1>redux num : {this.props.stateNum}</h1>
            <Home addNum={this.addNum}/>
            {this.props.children}
          </div>
        </div>
      )
  }
}

App.contextTypes = {
  router: PropTypes.object
}

//结合connect可以选择state暴露给app这个组件哪些属性
function select(state){
  return {
      stateNum : state.num
  };
}

export default connect(select)(App);