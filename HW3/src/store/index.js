import { createStore } from 'redux'
import reducers from './reducers' //引入reducers

const store = createStore(reducers); //1.創建store,從reducers中

export default store; //2.匯出store



