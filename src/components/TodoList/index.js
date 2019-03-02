// import React from 'react';

// import store from '../store/index';

// // 调用 store.getState() 来 获取仓库中 的数据
// console.log(store.getState().todos);

// class TodoList extends React.Component {

//   constructor (props) {
//     super(props);

//     this.state = {
//       todos: store.getState().todos
//     };

//     // 需要监听 仓库中的数据，如果修改之后，需要更改自己的数据
//     store.subscribe( () => {
//       this.setState({
//         todos: store.getState().todos
//       })
//     })
//   }

//   // 需要改变 当前点击的 对象的 isOk 属性
//   handleOk (index) {
//     let action = {
//       type: 'Finish',
//       index: index
//     }
//     store.dispatch(action);
//   }

//   render () {
//     return
//   }
// }

// export default TodoList;


import { connect } from 'react-redux';
import UI from './ui';

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleOk: (index) => {
      // console.log('我被点了')
      let action = {
        type: 'Finish',
        index
      };
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UI)
