import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST} from './todoTypes';
import axios from 'axios';
import {initList} from './todoAction';

function* getInitList(){
        const  res = yield axios.get('list');
        yield put(initList(res.data))
        
}


// generator 函数，es6的异步函数
function* todoSaga() {
    // 可以捕获到 action的方法；
    yield takeEvery(GET_INIT_LIST,getInitList)
  }
  
  export default todoSaga;

  /*
  view派发action时候，sagas 也能接收到你派发的类型
  */