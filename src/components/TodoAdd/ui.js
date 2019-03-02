 //  todoAdd 的 ui 组件

 import React from 'react';

 // 因为 要采取 非受控组件去控制 input 的value 值，因此需要使用 class 类的 方式来定义组件 ，函数不能使用 this.ref



 class UI extends React.Component {

  addTodo () {
    //  将派发动作传递给 容器组件去做
    this.props.addTodo(this.myInput.value);
  }

   render () {
     return (
      <div>
        { this.props.a }
        <input type='text' ref= { (el) => {
          this.myInput = el;
        }} />
        <button onClick = { this.addTodo.bind(this) }>Add</button>
    </div>
     )
   }
 }

 export default UI;
