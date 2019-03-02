// 初始化的状态
let defaultState = {
  todos: [
    {
      text: '吃饭',
      isOk: false
    },
    {
      text: '睡觉',
      isOk: true
    }
  ],
  // 商品列表
  products: [
    {
      id: 1000,
      name: '猫粮',
      price: 15
    },
    {
      id: 1001,
      name: '狗粮',
      price: 30
    }
  ],
  // 购物车数据
  carts: [

  ]
}


let recucer =  (prevState = defaultState, action) => {
  console.log(prevState);
  console.log(action);
  // 执行深拷贝
  let state =JSON.parse(JSON.stringify(prevState))
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({
        text: action.text,
        isOk: false
      });
      break;

    case 'Finish':
      state.todos[action.index].isOk = !state.todos[action.index].isOk;
      break;

    case 'ADD_CARD':
      // 判断 商品 是否存在 购物车中
      var id = action.product.id;
      var curProduct = state.carts.find(item => {
        return item.id === id
      });
      if (curProduct) {
        // 该商品存在的话，数量就加1
        curProduct.num ++;
        curProduct.total = curProduct.num * curProduct.price;
      } else {
        state.carts.push({
          ...action.product,
          num: 1,
          total: action.product.price
        })
      }
      break;

    case 'JIAN':
      // 判断 商品 是否存在 购物车中
      var id = action.product.id;
      var curProduct = state.carts.find(item => {
        return item.id === id
      });
      let index = state.carts.indexOf(curProduct);
      if (curProduct) {
        if (curProduct.num > 1) {
          curProduct.num --;
          curProduct.total = curProduct.num * curProduct.price;
        } else {
          // 删除 该商品
          state.carts.splice(index,1)
        }
      }
      break;

    default:
      break;
  }

  return state;
}

export default recucer;
