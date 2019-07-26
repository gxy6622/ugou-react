import fetch from 'isomorphic-fetch';
//import Cookies from 'js-cookie';

const alwaysPendingPromise = new Promise(() => {});
const defaultFetchOption = {
        method: 'post',
        mode: 'cors',                     // 支持跨域
        credentials: 'include',         // 携带cookie
        headers: { 'Content-Type': 'application/json' }
};
const http = function(url, option = {}) {
        option = Object.assign({}, defaultFetchOption, option);
        return fetch(url, option)
                .then(response => {
                        if(response.status >= 200 && response.status < 300) return response;
                        else return Promise.reject(new Error(response.statusText));
                })
                .then(response => response.json())
                .then(({ status, message, data }) => {
                        switch(status) {
                                case 200:
                                        if(message !== '') alert(message);
                                        return data;
                                case 401:
                                case 199:
                                case 500:
                                default:
                                        return Promise.reject(new Error(message));
                        }
                })
                .catch(err => {
                        alert(err.message);     // 如果有错误，就弹出错误相关的信息
                        return alwaysPendingPromise;
                })//catch没有返回一个总是pending的promise对象，会默认一直成功，执行下一步的then
                //.then(() => {});
};

export default http;