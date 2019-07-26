//打包入口文件 | 也是根实例文件
import React from 'react';
import ReactDOM from 'react-dom';
//导入仓库
import { Provider } from 'react-redux';         //仓库和react体系结合起来
import store from './store';
import App from './App.jsx';                                                    //导入根组件
import { BrowserRouter } from 'react-router-dom';               //导入路由文件
import './index.css';


//将根组件App渲染到挂载点root
ReactDOM.render(
        <Provider store={ store }>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root')
);