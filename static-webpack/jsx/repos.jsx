import { Link } from 'react-router';
import { connect } from 'react-redux';

class Repos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      repolist : [],
    };
  }

  componentDidMount(){
    this.getData();
  }

  //异步获取数据
  getData(){
    let _this = this;
    $.ajax(
      {
        url : './static/data/repolist.json',
        type : 'get',
        success : (res) => {
          _this.props.dispatch({
            type : 'getListSuc',
            response : res
          });
        },
        error : function(err){
          _this.props.dispatch({
            type : 'getListErr',
          });
        }
      });
  }


  render(){
    let content = '';
    if(this.props.data.length){
      content = this.props.data.map((el,index) => {
      return  <Link to={'/detail/'+el.rid} key={'repoItem-'+index} className='repoItem'>
                <div className='repoItemTit'>{el.title}</div>
                <div className='repoItemTime'>{el.time}</div>
              </Link>
      });
    }else{
      content = 'loading...';
    }
    // {xxx && xxx}来实现if的效果
    return (
        <div>
          <div>
            <h3>this is the repo list</h3>
          </div>
          <div>
            {content}
          </div>
          {this.state.repolist.length > 0 && 'ahhhhhh'}
        </div>
      )
  }  
}

function select(state){
  return {
    data : state.data
  }
}
export default connect(select)(Repos);