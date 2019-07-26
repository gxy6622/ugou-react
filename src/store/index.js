//总仓库，即总reducer
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';    //导入仓库的createState方法
import thunk from 'redux-thunk';                //使dispatch接收函数
import category , { actions as CategoryActions }from './category.js';   //导入子仓库
import product, { actions as ProductActions } from "./product.js";
import cart, { actions as CartActions } from "./cart.js";
import detail, { actions as DetailActions } from './detail.js';
import order, { actions as OrderActions } from './order.js';

export {
        CategoryActions,
        ProductActions,
        CartActions,
        DetailActions,
        OrderActions
}

const reducer = combineReducers({
        category,
        product,
        cart,
        detail,
        order
});

const store = createStore(
        reducer,
        compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    //redux调试
        )
);

export default store;


//如果给了第二个参数第二个参数一定要是一个对象，而且对象一定要包含type属性，属性值是一个字符串
//第一次调用时state是没有值得。空白，例 state= { list: [] }
//预期 const initialState = { category: { list: [] }, product: { list: [] }, cart: { list: [] } };
// function reducer(state, action = {}) {
//         return {
//                 category: categoryReducer(state.category, action),
//                 product: productReducer(state.product, action),
//                 cart: cartReducer(state.cart, action),
//         }
// }

//从仓库中取数据redux会自动调用reducer函数，取数据没有传action
//从仓库中改数据redux会自动调用reducer函数，改数据传了action
//组件或仓库ajax完毕要改仓库数据调用dispatch（{ type: 'a', payload: data }）;