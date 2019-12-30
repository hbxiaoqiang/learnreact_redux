import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';

function TodoItem(props) {
    return (
        <List
            size="large"
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item
                onClick={() => { props.handleDel(index) }}
            >{item}
            </List.Item>}
        />
    )
}

/*
// 当组件只有一个render的时候可以使用无状态组件，就是普通的函数组件，因为它没有生命周期等函数，更简单，
性能所以更好，一般ui组件都使用无状态组件,之前说过16.8提供了
hook写法，是因为之前这种写法，你处理生命周期，state等比较麻烦，所以增加了这个hook，理论上的hook写法应该会略优，
*/
// class TodoItem extends Component{
//     render(){
//         return (
//             <List
//                 size="large"
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => <List.Item
//                     onClick={()=>{this.props.handleDel(index)}}
//                 >{item}
//                 </List.Item>}
//             />
//         )
//     }
// }

export default TodoItem;