class Detail extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      id : this.props.routeParams.id,
      name : '--',
    }
  }

  handleClick(id,e){
    console.log('you clickd '+id,e);
  }

  handleBtnClick(e){
    alert(this.input.value);
  }

  handleChange(e){
    //多个input时通过name批量处理
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  // 通过ref直接获取dom元素，在mount之后可以直接获取到他
  // 使用value的话，就会劫持这个组件，使用defaultValue的话就可以设定默认值
  render(){
    return  <div>
              <h3 onClick={this.handleClick.bind(this,this.props.routeParams.id)}>this is the detail</h3>
              <h4>you are reading article : {this.props.routeParams.id}</h4>
              <p>change your id : <input type='text' value={this.state.id} onChange={this.handleChange} name='id'/></p>
              <p>change your name : <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/></p>
              <p>your id is : {this.state.id} , your name is : {this.state.name}</p>
              <p><input ref={(input) => {this.input = input}} defaultValue='test'/><button onClick={this.handleBtnClick}>get</button></p>
            </div>
  }
}

export default Detail;