import React from 'react';

const UI = (props) => {
  return (
    <div>
      <ul>
        {
          props.products.map(item => {
            return (
              <li key={item.id}>
                <p>{item.name}    <span>价格：￥{item.price}</span></p>
                <button onClick = {props.jian.bind(this, item)}>-</button>
                <button onClick = {props.add.bind(this, item)}>+</button>
              </li>
            )
          })
        }
      </ul>
        以下是购物车 数据
        <ol>
          {
            props.carts.map(item => {
              return (
                <li key={item.id}>
                  <p>{item.name}    </p>
                  <p>价格：￥{item.price}</p>
                  <p>数量：{item.num} </p>
                  <p>总价：￥{item.total} </p>
                </li>
              )
            })
          }
        </ol>
    </div>
  )
}

export default UI
