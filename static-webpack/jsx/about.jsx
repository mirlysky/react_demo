import Aboutchild from './aboutChild'
import Aboutchild2 from './aboutChild2'

class About extends React.Component{
  constructor(props){
    super(props);
    this.childCBK = this.childCBK.bind(this);
  }

  //提供函数返回context对象
  getChildContext(){
    return{
      callback : function(res){
        console.log('emmmm : '+res);
      }
    }
  }

  //向子组件传递cbk，用于通信使用
  childCBK(param){
    console.log('father know child1 said : '+param);
  }  

  render(){
    return (
        <div>
          <h3>this is sth about</h3>
          <Aboutchild cbk={this.childCBK}></Aboutchild>
          <Aboutchild2 ></Aboutchild2>
        </div>
      )
  }

}

//父组件宣布支持context
About.childContextTypes = {
  callback : PropTypes.func
}

export default About;