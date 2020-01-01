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