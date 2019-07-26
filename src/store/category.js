//子仓库

import { CategoryAPI } from '../utils/API.js';
const actionTypes = {
        APPENDDATA: 'category/APPENDDATA',
        RECORDFID: 'category/RECORDFID'
};

//action creator        帮助组件产生dispatch函数调用时需要的参数，让组件不去关心action对象怎么构造，ajax怎么发
//组件需要关心的是要把什么数据通过action携带，ajax请求要传什么参数
export const actions = {
        //appendData: payload => ({ type: actionTypes.APPENDDATA, payload }),
        getData: function(fid){
                return function(dispatch, getState){    //返回的这个函数作为组件dispatch的参数，并且给这个函数两个参数
                        if(getState().category.scanedFids.indexOf(fid) !== -1)  //如果浏览过了，返回一个成功的promise，什么也不做
                                return Promise.resolve(fid === 0? getState().category.list[0].id : undefined);                                       //否则请求数据
                        else return CategoryAPI.getData({ fid })
                                .then(data => { //把当前刚请求过的fid记录下，和把这次请求的数据放到list中
                                        dispatch({ type: actionTypes.RECORDFID, payload: fid });
                                        dispatch({ type: actionTypes.APPENDDATA, payload: data });
                                        if(fid === 0) return data[0].id;        //如果是请求一级分类数据，需要给组件返回一个一级分类的第一项的id值，好让它激活第一项，如果不是，什么都不返回
                                });
                }
        }
};

const initialState = {
        list: [],               //记录用户所有看过的分类数据，无论一级还是二级
        scanedFids: []   //记录用户所有看过的分类的fid值
};

const reducer = (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.APPENDDATA:
                        return Object.assign({}, state, { list: [ ...state.list, ...payload ] });       //向list里追加数据（一坨一坨的数组）
                case actionTypes.RECORDFID:
                        return Object.assign({}, state, { scanedFids: [ ...state.scanedFids, payload ] });      //追加fid，因为每次都是看一个，所以不用展开
                default:
                        return state;
        }
};
export default reducer;
