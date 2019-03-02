// 仓库的主文件

import { createStore } from 'redux';
// 引入纯函数
import reducer from './reducers/index'

// 创建仓库的函数 createStore 该函数的参数一个 redecer(纯函数) ,而该纯函数 则接受两个参数 第一个为prevState(仓库上一次)旧的数据，第二个参数为 action 即派发动作的 对象
let store = createStore(reducer) ;

export default store;
