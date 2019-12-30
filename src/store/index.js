import { createStore } from 'redux' // 先创建一个数据的公共存储仓库,
import reducer from './reducer';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() chrome 调试 redux 需下在插件
export { store };