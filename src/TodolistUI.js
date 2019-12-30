import React ,{Fragment} from 'react';
import 'antd/dist/antd.css';  //引入antd UI组件v
import { Input, Button } from 'antd'; // 引入antd 一些组件的风格
import TodoItem from './TodoItem';

function TodolistUI(props){
    return (
        <Fragment>
            <div style={{ marginTop: '30px', marginLeft: '30px', marginBottom: '20px' }}>
                <Input 
                value = {props.inputValue}
                onChange={props.handleInputChange}
                placeholder="Basic usage" 
                style={{ width: '200px', marginRight: '10px' }} />
                <Button
                onClick={props.handleListAdd}
                type="primary">添加</Button>
            </div>
            <TodoItem
            />
        </Fragment>
    )
}

export default TodolistUI;
