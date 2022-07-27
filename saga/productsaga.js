import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST,FETCH_API } from '../actions/todoAction/ActionTypes';
function* getproducts (){
   let dataa = yield fetch('https://jsonplaceholder.typicode.com/todos')
    dataa = yield dataa.json();
   // console.log("call api", dataa)
   dataa=dataa.slice(0,5)
 //  console.log(dataa)
    yield put({type: PRODUCT_LIST, data:dataa})
}

function* productSaga(){
yield takeEvery(FETCH_API, getproducts) //watch every action
}
export default productSaga;