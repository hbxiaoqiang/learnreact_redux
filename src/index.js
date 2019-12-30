import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';

ReactDOM.render(<Todolist />, document.getElementById('root'));

/*
本案例 主要是todo功能的进一步扩展 借助了解 redux的在react中的配合
 
redux 一个独立的状态管理库，可配合其他框架使用，在react中主要是解决数据传递
引入Redux主要为了使JavaScript中数据管理的方便，易追踪，
避免在大型的JavaScript应用中数据状态的使用混乱情况

redux基本概念
1 数据存储 - state 
    第一个概念就是状态数据 state就是存放数据的地方，根据应用需要，一般定义成一个对象
    {
    todos: [],
    showType: 'ALL',
    lastUpdate: '2019-10-30 11:56:11'
    }

2 行为触发 - action
    所有的数据状态变更，都是由一个行为触发的
    Redux引入了action的概念，每个要改变数据状态的行为，都定义成一个action对象，用一个type来标志是什么行为，行为附带的数据
    ，也都直接放在action对象，比如一个用户输入的行为；然后通过dispatch触发这个action，dispatch(action)
    {
    type: 'INPUT_TEXT',
    text: '今天下午6点活动碰头会议'
    }

3 行为响应 - reducer
    当action触发的时候，肯定要修改state数据，但不能直接修改state
    这个reducer就是一个行为响应函数，他接收当前state，和对应的action对象，根据不同的action，做相应的逻辑判断和数据处理，然后返回一个新的state。
    一定是返回一个新的state，不能直接修改参数传入的原state，这是redux的原则之一（单向数据流）

4 数据监听 - subscribe
    数据的更新已经在reducer中完成了，需要监听数据状态的变化
    redux内部保存一个监听队列，listeners，可以调用subscribe来往listeners里面增加新的监听函数，每次reducer修改完state之后，会逐个执行监听函数，
    而监听函数可以获取已经更新过的state数据了

redux设计原则
1 单一数据原则 store必须是唯一的，只有一个

2 state只读 ，只有store能改变自己的内容，reducer中返回一个新的数据，在store中修改

3 使用纯函数，指给一个固定的输入，就一定有一个固定的输出，而且不会有副作用，如reducer里便有ajax获取new date 操作都不算纯函数

参考 https://www.redux.org.cn/
    */
/*
 Ant Design （蚂蚁金服出的ui）
 antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
 Ant Design 还有其他包装，包括移动UI库Ant Design Mobile（mobile和native）
 //除了Ant Design的 还有其他各种UI库（而且各有优劣，数量多到足够刷新你三观），并且基本上都可以应用到各种构建用户界面的js库（react，vue，ag）
 // 后面再整理一下大致可以在项目中应用的ui库
*/