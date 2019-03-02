import React from 'react';

const UI = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map((item, index) => {
            return (
            <li
              key={ index }
              style = {{ textDecoration: item.isOk ? 'line-through' : '' }}
              onClick = { props.handleOk.bind(this, index) }
              >
              {item.text}
            </li>)
          })
        }
      </ul>
      </div>
  )
}

export default UI
