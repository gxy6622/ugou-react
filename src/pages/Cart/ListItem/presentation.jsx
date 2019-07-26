import React from 'react';
import style from './presentation.module.scss';
import CheckBox from '../CheckBox';
import UCount from '../../../components/UCount';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
        render() {
                let { name, pid, avatar, price, count, select1, toggle1, decrease, increase } = this.props;
                return (
                        <>
                                <CheckBox checked={ select1 } toggle={ toggle1 } />
                                <Link to={ `/detail/${ pid }` } className={ style["avatar-wrapper"] }>
                                        <img src={ avatar } alt="" />
                                </Link>
                                <div className={ style.info }>
                                        <Link to={ `/detail/${ pid }` } className={ style.name }>{ name }</Link><br/>
                                        <Link to={ `/detail/${ pid }` } className={ style["price-wrapper"] }>
                                                <span>￥{ price }</span>
                                        </Link>
                                        <div className={ style["count-wrapper"] }>
                                                <UCount count={ count } decrease={ decrease } increase={ increase } />
                                        </div>
                                </div>
                        </>
                );
        }
}

export default Presentation;