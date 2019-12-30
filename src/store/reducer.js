const defaultState = {
    inputValue:'123',
    list:[]
}

//todolist 的默认数据,复杂管理

export default (state=defaultState,action) => {
    //state 是单向数据流不能修改，如果改变的化只能会传一个新的
    let newState = JSON.parse(JSON.stringify(state));
    //先这个深度拷贝一个对象吧
    switch(action.type){
        case 'INPUT_CHANGE':
            newState.inputValue = action.value;
            return newState;
        case 'LIST_ADD':
            newState.list.push(newState.inputValue);
            newState.inputValue="";
            return newState;
        case 'LIST_DEL':
            newState.list.splice(action.value,1);
            return newState;
        case 'INIT_LIST_DATA':
            newState.list = action.value;
            return newState;
        default:
            return state
    }
   
}; 



/*
    //state 是整个store里的数据,
*/