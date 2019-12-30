import {INPUT_CHANGE,LIST_ADD,LIST_DEL} from './todoTypes'

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

export {
    inputChange,
    listAdd,
    listDel
}

//创建一个action的操作统一