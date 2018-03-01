class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.addNum();
  }

  render(){
    return (
        <div>
          <h3>this is the home page,{this.props.name}</h3>
          <button onClick={this.handleClick}>add</button>
        </div>
      )
  }  
}

//通过defaultProps设置默认属性
Home.defaultProps = {
  name : 'lan'
}
//通过prop-types验证属性格式
Home.propTypes = {
  name : PropTypes.string
}
export default Home;