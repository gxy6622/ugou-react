import { CartAPI } from '../utils/API.js';

const actionTypes = {
        INIT: 'cart/INIT',
        TOGGLE1: 'cart/TOGGLE1',
        TOGGLEALL1: 'cart/TOGGLEALL1',
        DECREASE: 'cart/DECREASE',
        INCREASE: 'cart/INCREASE',
        REMOVE: 'cart/REMOVE',
        SETTLEMENT: 'cart/SETTLEMENT',
        UPDATEORDERID: 'cart/UPDATEORDERID'
};

export const actions = {
        init: () => dispatch => {
                return CartAPI.init()
                        .then(data => dispatch({ type: actionTypes.INIT, payload: data }));
        },
        toggle1: id => ({ type: actionTypes.TOGGLE1, payload: id }),
        toggleAll1: checked =>({ type: actionTypes.TOGGLEALL1, payload: checked }),
        decrease: id => dispatch => {
                return CartAPI.decrease({ id })
                        .then(() => dispatch({ type: actionTypes.DECREASE, payload: id }));
        },
        increase: id => dispatch =>{
                return CartAPI.increase({ id })
                        .then(() => dispatch({ type: actionTypes.INCREASE, payload: id }));
        },
        remove: () => (dispatch, getState) => {
                let ids = [];
                getState().cart.list.forEach(function(item) {
                        if(item.select1) {
                                this.push(item.id);
                        }
                }, ids);
                if(ids.length < 1) { alert('请先选择'); return Promise.resolve(); }
                return CartAPI.remove({ ids: JSON.stringify(ids) })
                        .then(() => dispatch({ type: actionTypes.REMOVE, payload: ids }));
        },
        settlement: () => (dispatch, getState) => {
                let ids = [], account = 0;
                getState().cart.list.forEach(function(item) {
                        if(item.select1) {
                                this.push(item.id);
                                account += item.price * item.count;
                        }
                }, ids);
                if(ids.length < 1) { alert('请先选择'); return Promise.resolve(); }
                return CartAPI.settlement({ ids: JSON.stringify(ids), account })
                        .then(data => {
                                        dispatch({ type: actionTypes.SETTLEMENT, payload: ids });
                                        dispatch({ type: actionTypes.UPDATEORDERID, payload: data })
                        });
        }
};

const initialState = { list: [], orderId: '' };

export default (state = initialState, { type, payload } = {}) => {
        let list = state.list.slice(0), target = null;
        switch(type) {
                case actionTypes.INIT:
                        list = payload;
                        list.forEach(item => {
                                item.select1 = true;
                        });
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLE1:
                        target = list.find(item => item.id === payload);
                        target.select1 = !target.select1;
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLEALL1:
                        list.forEach(item => item.select1 = payload);
                        return Object.assign({}, state, { list });
                case actionTypes.DECREASE:
                        target = list.find(item => item.id === payload);
                        target.count -= 1;
                        return Object.assign({}, state, { list });
                case actionTypes.INCREASE:
                        target = list.find(item => item.id === payload);
                        target.count += 1;
                        return Object.assign({}, state, { list });
                case actionTypes.UPDATEORDERID:
                        return Object.assign({}, state, { orderId: payload });
                case actionTypes.REMOVE:
                case actionTypes.SETTLEMENT:
                        list = list.filter(item => payload.indexOf(item.id) === -1);
                        return Object.assign({} ,state, { list });
                default:
                        return state;
        }
};

