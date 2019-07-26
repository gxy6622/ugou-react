import { ProductAPI } from '../utils/API.js';

const actionTypes = {
        APPENDDATA: 'product/APPENDDATA',
        CLEARDATA: 'product/CLEARDATA'
};

export const actions = {
        getData: function(ajaxData) {
                return function(dispatch, getState){
                        //=0,表示换一个cid看
                        if(ajaxData.begin === 0) dispatch({ type: actionTypes.CLEARDATA });
                        return ProductAPI.getData(ajaxData)
                                .then(data => {
                                        if(data.length > 0) dispatch({ type: actionTypes.APPENDDATA, payload: data });
                                        return data.length;     //返回组件用于hasMore判断是否还有更多。
                                })
                }
        }
};

const initialState = { list: [] };

export default (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.APPENDDATA:
                        return Object.assign({}, state, { list: [ ...state.list, ...payload ] });
                case actionTypes.CLEARDATA:
                        return Object.assign({}, state, { list: [] });
                default:
                        return state;
        }
}