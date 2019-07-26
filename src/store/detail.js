import { DetailAPI } from '../utils/API.js';

const actionTypes = {
        INITDATA: 'detail/INITDATA',
        ADDCART: 'detail/ADDCART'
};

export const actions = {
        getData: function(ajaxData) {
                return function(dispatch, getState) {
                        return DetailAPI.getData(ajaxData)
                                .then(data => dispatch({ type: actionTypes.INITDATA, payload: data }))
                }
        },
        addCart: function(ajaxData) {
                return function(dispatch, getState) {
                        return DetailAPI.addCart(ajaxData)
                                .then(() => dispatch({ type: actionTypes.ADDCART }))
                }
        }
};

const initialState = { list: [] };

export default (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.INITDATA:
                        return Object.assign({}, state, { list: [ ...state.list, ...payload ] });
                case actionTypes.ADDCART:
                        return Object.assign({}, state, { list: state.list });
                default:
                        return state;
        }
}