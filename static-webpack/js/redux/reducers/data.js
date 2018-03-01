//单独处理data的function
function handleData(data = [],action){
  switch(action.type){
    case 'getListSuc' : 
      return action.response;
    break;
    case 'getListErr' :
      return [];
    break;
    default : return data;
  }
}

export default handleData;