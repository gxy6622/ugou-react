import React from 'react';
import style from './presentation.module.scss';
import CheckBox from '../CheckBox';

class Presentation extends React.Component {
        render() {
                let { allSelect1Checked, toggleAllSelect1, remove, settlement, totalPrice, totalCount } = this.props;
                return (
                        <>
                                <div className={ style.footer }>
                                        <div className={ style["all-wrapper"] }>
                                                <CheckBox checked={ allSelect1Checked } toggle={ toggleAllSelect1 } />&nbsp;&nbsp;全选
                                                <span className={ style.remove } onClick={ remove }>删除<img src={ require('./del.png') } alt="" /></span>
                                        </div>
                                        <div className={ style["total-price-wrapper"] }>
                                                合计：<em>￥<span className={ style["total-price"] }>{ totalPrice }</span></em>
                                        </div>
                                        <button className={ style["btn-settlement"] } onClick={ settlement }>去结算
                                                <span className={ style["total-count"] }>{ totalCount > 0 ? `(${ totalCount })` : '' }</span>
                                        </button>
                                </div>
                        </>
                );
        }
}

export default Presentation;