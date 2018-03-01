import { Link } from 'react-router';
import router from './router';

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    let listItems = router.map((item,index) => {
      if(!item.noshow){
        return <li key={'list-'+index} className='sideItem'><Link to={item.path} activeClassName='active'>{item.link}</Link></li>
      }
    });
    return <ul className='sideContainer'>
            {listItems}
          </ul>
  }
}

export default Sidebar;