//单独处理num的function
function handleNum(num = 0,action){
  switch (action.type){
    case 'ADD' :
      return num+1;
    break;
    default : return num;
  }
}

export default handleNum;