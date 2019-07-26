import React from 'react';
import style from './presentation.module.scss';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
        render() {
                return (
                        <ul className={ style["detail-footer"] }>
                                <li>
                                        <Link to="">
                                                <i><img src={ require('./like.png') } alt="" /></i>
                                                <span className={ style.color }>收藏</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link to="/cart">
                                                <i><img src={ require('./car1.png') } alt="" /></i>
                                                <span className={ style.color }>购物车</span>
                                        </Link>
                                </li>
                                <li onClick={ this.props.addCart2 }>
                                        <Link to="#">
                                                <span className={ style["add-cart"] }>加入购物车</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link to="/cart">
                                                <span>立即购买</span>
                                        </Link>
                                </li>
                        </ul>
                );
        }
}

export default Presentation;