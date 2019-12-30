import React, { Component } from 'react';
import { store } from './store/index.js';
import {listDel} from './store/todoAction';
import TodoItemUI from './TodoItemUI';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleDel = this.handleDel.bind(this);
        store.subscribe(() => {
            // 然后直接调用数据修改状态
            this.setState(() => store.getState())
        })
    }

    render() {
        return (
            <TodoItemUI 
            list = {this.state.list}
            handleDel = {this.handleDel}
            />
        )
    }

    handleDel(index) {
        store.dispatch(listDel(index));
    }
}

export default TodoItem