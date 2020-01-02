import {INPUT_CHANGE,LIST_ADD,LIST_DEL,INIT_LIST_DATA,GET_INIT_LIST} from './todoTypes'
import axios from 'axios';
const inputChange = (value)=>({
    type:INPUT_CHANGE,
    value
})

const listAdd = (value)=>({
    type:LIST_ADD,
    value
})

const listDel = (value)=>({
    type:LIST_DEL,
    value
})

const initList = (value)=>({
    type:INIT_LIST_DATA,
    value
})

const initListData=()=>{
    return (dispatch)=>{ // 这个return 参数能接收到dispath方法
        let url = 'https://www.easy-mock.com/mock/5e0a0d18cdc33866251c4a9f/example';
        axios.get(url+'/list').then((data)=>{
            dispatch(initList(data.data.list))
        }).catch(()=>{
            alert('err')
        })
    }
}
/*
// 以下是 加入redux 中间件 模块后，action里可以返回一个函数，这个样子就可以在这里使用异步
 因为正常情况下，action只能是一个对象，因为dispatch发送给reducer只能同步处理，所以只能是一个数据对象，
    这个如果是个函数 他会帮你处理执行，返回函数自动会接收到dispatch，
    其实最大好处 就是把异步代码进一步分离出来，让组件更纯
 */

 const getInitList =()=>{
     return {
         type:GET_INIT_LIST
     }
 }
export {
    inputChange,
    listAdd,
    listDel,
    initList,
    initListData,
    getInitList
}

//创建一个action的操作统一