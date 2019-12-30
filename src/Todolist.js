import React, { Component } from 'react';
import { store } from './store/index.js'; 
import {inputChange,listAdd} from './store/todoAction';
import TodolistUI from './TodolistUI';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState(); // 用store 提供的方法getState拿到reducer默认数据
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleListAdd = this.handleListAdd.bind(this);
        //用store订阅一个通知，数据已经更新；然后可以修改state状态
        store.subscribe(()=>{
           // 然后直接调用数据修改状态
            this.setState(()=>store.getState())
        })
    }

    render() {
        return (
           <TodolistUI 
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleListAdd = {this.handleListAdd}
           />
        )
    }

    handleInputChange(e){
        //当前数据改变的时候，发送一条action 通知store
        //一般情况action 就是你想要通知的内容 如下写
        // let action = {
        //     type:'INPUT_CHANGE',
        //     value: e.target.value
        // }
        store.dispatch(inputChange(e.target.value));
    }

    handleListAdd(){
        //console.log(this.state.list);
        store.dispatch(listAdd());
    }
}

export default Todolist;