// import React from 'react';

// import store from '../store/index'

// class TodoAdd extends React.Component {

//   addTodo () {
//     // 点击事件 获取 myInput 这个真实dom 对象的value
//     var value = this.myInput.value;
//     // 将value 写入仓库, 就必须先派发一个动作, 动作是一个 对象
//     let action = {
//       type: 'ADD_TODO',
//       text: value
//     }
//     store.dispatch(action) // 这个 派发动作是 store 的一个 dispatch 的 实例函数
//     this.myInput.value = '';
//   }

//   render () {
//     return
//   }
// }

// export default TodoAdd;


// ===============================

// 这是 TodoApp 的容器组件
// 容器组件的写法，需要通过 react-redux.connect() 去连接 UI 组件， 最后返回容器组件
import { connect } from 'react-redux';
import UI from './ui';

let mapStateToProps = (state) => {
  // return 出去的 就是UI 组件的 props
  return {
    a: 1
  }
}

let mapDisPatchToProps = (dispatch) =>{
  return {
    addTodo : (value) => {

      let action = {
        type: 'ADD_TODO',
        text: value
      }
      dispatch(action)
      // console.log('容器组件中的add方法 被调用了')
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(UI); // 最后暴露的这个 即为 容器组件
