import {INPUT_CHANGE,LIST_ADD,LIST_DEL,INIT_LIST_DATA} from './todoTypes'

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

export {
    inputChange,
    listAdd,
    listDel,
    initList
}

//创建一个action的操作统一