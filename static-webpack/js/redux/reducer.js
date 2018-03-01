import { createStore , combineReducers} from 'redux';
import handleNum from './reducers/num';
import handleData from './reducers/data';

/*1、需要reducer函数处理对于不同action的处理
  2、不要直接操作state，通过Object.assign返回新的state对象
  3、通过combineReducers拆分reducer，这样看起来就简洁了很多*/
var reducer = combineReducers({
  num : handleNum,
  data : handleData
});

export default reducer;