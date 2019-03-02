import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// 引入 路由模块
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Cart from './views/Cart';
import TodoApp from './views/TodoApp'


// 引入 仓库实例
import store from './store/index';


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <>
        <ul>
          <li>
            <NavLink to='/todo'>TodoApp</NavLink>
            <NavLink to='/cart'> 详情页 </NavLink>
          </li>
        </ul>

        <Route path= '/todo' component = {Cart}></Route>
        <Route path = '/cart' component = {TodoApp}></Route>
      </>
    </Router>
  </Provider>,
  document.getElementById('root'));


