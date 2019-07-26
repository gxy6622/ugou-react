import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';

class UNav extends React.Component {
        render() {
                return (
                        <ul className={ style.nav }>
                                <li>
                                        <NavLink to="/" exact>
                                                <img src={ require('./footer/footer01.png') } alt=""/>
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink to="/category">
                                                <img src={ require('./footer/footer02.png') } alt="" />
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink to="/discover">
                                                <img src={ require('./footer/footer03.png') } alt="" />
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink to="/cart">
                                                <img src={ require('./footer/footer04.png') } alt="" />
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink to="/profile">
                                                <img src={ require('./footer/footer05.png') } alt="" />
                                        </NavLink>
                                </li>
                        </ul>
                );
        }
}

export default UNav;