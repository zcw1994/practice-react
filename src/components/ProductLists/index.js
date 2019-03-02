import { connect } from 'react-redux';
import UI from './ui';

let mapStateToProps = (state) => {
  return {
    products: state.products,
    carts: state.carts
  }
};

let mapDisPatchToProps = (dispatch) => {
  return {
    // 添加 商品信息近 仓库
    add: (productInfo) => {

      let action = {
        type: "ADD_CARD",
        product: productInfo
      }
      dispatch(action)
    },
    jian: (productInfo) => {
      let action = {
        type: 'JIAN',
        product: productInfo
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(UI)
