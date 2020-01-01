/*
import { createStore,applyMiddleware,compose } from 'redux';// 先创建一个数据的公共存储仓库,
import thunk from 'redux-thunk'; 
import reducer from './reducer';

// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// 以上是不使用中间件的写法，直接第二参数可以使用redux-devtools
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() chrome 调试 redux 需下在插件
// 第二个参数，中间件参数，

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  //里边的参数是，逗号分隔的多个参数
);

//上面这个方法，直接参考 redux-devtools的githup文档

const store = createStore(reducer,
  enhancer
    );

export { store };
//以上是redux-thunk中间见使用
*/
//以下是redux-saga中间件使用
import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga' // 引入saga创建模块，需要使用 redux-saga 中间件将 Saga 与 Redux Store 建立连接
import reducer from './reducer';
import todoSaga from './sagas';//需要创建一个saga.js文件

const sagaMiddleware = createSagaMiddleware() 

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(todoSaga) // 需要执行run，这点事与redux-thunk不同的地方

export { store };