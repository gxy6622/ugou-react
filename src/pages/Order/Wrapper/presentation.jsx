import React from 'react';
import style from './presentation.module.scss';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
        render() {
                return (
                        <div className={ style["page-wrapper"] }>
                                <div className={ style.header }>
                                        <div className={ style.back }>
                                                <span>
                                                        <img src={ require('./new-back.png') } alt="" />
                                                </span>
                                        </div>
                                        <div className={ style.ugou }>
                                                <span>结算中心</span>
                                        </div>
                                </div>
                                <div className={ style.content }>
                                        <div className={ style.address }>
                                                <p className={ style["receive-title"] }>
                                                        <img src={ require('./order/adress.png') } alt="" />收货地址
                                                </p>
                                                <p className={ style["receive-name"] }>
                                                        <span>zhangsan</span>
                                                        <span>137****7777</span>
                                                </p>
                                                <p className={ style["receive-address"] }>
                                                        ******长城路000号
                                                        <Link to="/address">
                                                                <img src={ require('./order/open.png') } alt="" />
                                                        </Link>
                                                </p>
                                        </div>
                                        <div className={ style["deliver-date"] }>
                                                <p><img src={ require('./order/date.png') } alt="" />选择配送时间</p>
                                                <ul className={ style.deliver }>
                                                        <li className={ style.active }>工作日、双休日与假日均可送货</li>
                                                        <li>仅工作日送货（周一至周五）</li>
                                                        <li>仅周末送货（周六、周日）</li>
                                                </ul>
                                        </div>
                                        <div className={ style["pay-style"] }>
                                                <p><img src={ require('./order/pay.png') } alt="" />选择支付方式</p>
                                                <ul className={ style.pay }>
                                                        <li className={ style.active }>支付宝钱包支付</li>
                                                        <li>云闪付</li>
                                                        <li>招商银行</li>
                                                </ul>
                                        </div>
                                        <div className={ style["gift-card"] }>
                                                <p><img src={ require('./order/discount.png') } alt="" />使用优惠券与礼品卡</p>
                                                <ul className={ style["gift-card-list"] }>
                                                        <li>使用优惠券<img src={ require('./order/open.png') } alt="" /></li>
                                                        <li>使用礼品卡<img src={ require('./order/open.png') } alt="" /></li>
                                                </ul>
                                        </div>
                                        <div className={ style.invoice }>
                                                <p className={ style["invoice-info"] }><img src={ require('./order/invoice.png') } alt="" />发票信息</p>
                                                <p className={ style["no-need"] }>不需要发票<img src={ require('./order/open.png') } alt="" /></p>
                                        </div>
                                        <div className={ style["product-info"] }>
                                                <p><img src={ require('./order/information.png') } alt="" />商品信息</p>
                                                <ul className={ style["info-list"] }>
                                                        {this.props.list.map(item => (
                                                                <li key={ item.pid }>
                                                                        <img src={ item.avatar } alt="" />
                                                                        <div className={ style["info-content"] }>
                                                                                <p className={ style.name }>{ item.name }</p>
                                                                                <span className={ style.price }>￥{ item.price }</span>
                                                                                <span className={ style.count }><em>×</em>{ item.count }</span>
                                                                        </div>
                                                                </li>
                                                        ))}

                                                </ul>
                                        </div>
                                        <p className={ style["order-id"] }></p>
                                </div>
                                <div className={ style.footer }>
                                        <div className={ style["total-price-wrapper"] }>
                                                应付金额：<em>￥{ this.props.account }</em>
                                        </div>
                                        <button className={ style["btn-settlement"] }>提交订单</button>
                                </div>
                        </div>
                );
        }
}

export default Presentation;