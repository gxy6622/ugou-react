import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';

class PopUp extends React.Component {
        render() {
                return (
                        <div className={ style.nav }>
                                <ul>
                                        <li>
                                                <NavLink to="/">
                                                        <img src={ require('./images/homec.png') } alt="" /><span>首页</span>
                                                </NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/category"><
                                                        img src={ require('./images/class.png') } alt="" /><span>分类</span>
                                                </NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/cart">
                                                        <img src={ require('./images/ico-shopcartc.png') } alt="" /><span>购物车</span>
                                                </NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/profile">
                                                        <img src={ require('./images/ico-personc.png') } alt="" /><span>我的优购</span>
                                                </NavLink>
                                        </li>
                                </ul>
                        </div>
                );
        }
}

export default PopUp;