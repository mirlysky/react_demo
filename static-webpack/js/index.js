import { Router, Route, hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
//引入全局唯一状态容器store
import store from '../js/redux/store';
//引入router
import router from '../jsx/router';
//引入容器App
import App from '../jsx/app';

let routeItems = router.map((el,index) => {
  return <Route path={el.path} component={el.component} key={'routeItem-'+index}/>
});

//通过provider可以把state传给容器中的子组件

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        {routeItems}
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
