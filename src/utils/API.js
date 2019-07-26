import http from './http.js';

export const CategoryAPI = {
        //ajaxData = { fid: ? }
        getData: ajaxData => http('/category/getListByFid', { body: JSON.stringify(ajaxData) })
};
export const ProductAPI = {
        //ajaxData = { cid: ?, begin: ?, count: ? }
        getData: ajaxData => http('/product/list', { body: JSON.stringify(ajaxData) })
};
export const CartAPI = {
        init: () => http('/cart/list', { method: 'post' }),
        //ajaxData={ id: ? }
        decrease: ajaxData => http('/cart/decrease', { body: JSON.stringify(ajaxData) }),
        //ajaxData={ id: ? }
        increase: ajaxData => http('/cart/increase', { body: JSON.stringify(ajaxData) }),
        //ajaxData={ ids: ? }
        remove: ajaxData =>http('/cart/remove', { body: JSON.stringify(ajaxData) }),
        //ajaxData={ ids: ?, name: ?, account: ? }
        settlement: ajaxData => http('/cart/settlement', { body: JSON.stringify(ajaxData) })
};
export const LoginAPI = {
        getCode: () => http('/login/getcode', { method: 'get' }),
        // ajaxData = { phone: ?, code: ? }
        loginPhone: ajaxData => http('/login/phone', { body: JSON.stringify(ajaxData) }),
        // ajaxData = { account: ?, pwd: ? }
        loginPwd: ajaxData => http('/login/pwd', { body: JSON.stringify(ajaxData) })
};
export const DetailAPI = {
        //ajaxData = { id: ? }
        getData: ajaxData => http('/product/list2', { body: JSON.stringify(ajaxData) }),
        //ajaxData = { name: ?, pid: ?, count: ? }
        addCart: ajaxData => http('/detail/add', { body: JSON.stringify(ajaxData) })
};
export const OrderAPI = {
        //ajaxData = { orderId: ? }
        getData: ajaxData => http('/order/list', { body: JSON.stringify(ajaxData) })
};
