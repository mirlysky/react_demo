import { createStore , combineReducers} from 'redux';
import reducer from './reducer';

const initialState = {
  num : 0,
  data : []
};

//通过第二个参数设置state初始值
const store = createStore(reducer ,initialState);

//state的更新后可以自动触发subscribe函数
store.subscribe(() => {
  console.log('【state is changed】[store.js]'+store.getState());
});

//1、middleware的原型，修改dispatch方法
// let next = store.dispatch;
// store.dispatch = function dispatchAndLog(action){
//   console.log('pre state :',store.getState());
//   let result = next(action);
//   console.log('after state :',store.getState());
//   return result;
// }

//2、将dispatch放在function的内部
//编写方法middleware将中间件应用到dispatch中
function preLogger(store){
  let dispatch = store.dispatch;
  return function(action){
    console.log('pre state :',store.getState());
    return dispatch(action);
  }
}
function afterLogger(store){
  let dispatch = store.dispatch;
  return function(action){
    let result = dispatch(action);
    console.log('after state :',store.getState());
    return result;
  }
}
function applyMidware(store,midwares){
  midwares.forEach((midware)=>{
    store.dispatch = midware(store);
  });
}
//这样应用midware
applyMidware(store,[preLogger,afterLogger]);
export default store;