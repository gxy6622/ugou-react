import { OrderAPI } from '../utils/API.js';

const actionTypes = {
        APPENDDATA: 'order/APPENDDATA'
};

export const actions ={
        getData: function(ajaxData) {
                return function(dispatch, getState) {
                        return OrderAPI.getData(ajaxData)
                                .then(data => dispatch({ type: actionTypes.APPENDDATA, payload: data[0]}))
                }
        }
};

const initialState = { list: [] };
export default (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.APPENDDATA:
                        return Object.assign({}, state, { list: payload });
                default:
                        return state;
        }
}