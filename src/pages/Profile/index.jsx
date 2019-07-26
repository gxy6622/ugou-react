import React from 'react';
import style from './index.module.scss';
import PopUp from '../../components/PopUp';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isClose: false };
        }
        toggle(flag) {
                this.setState({ isClose: !flag });
        }
        render() {
                return (
                        <div className={ style["profile-wrapper"] }>
                                <div className={ style.header }>
                                        <div className={ style.back }>
                                                <Link to="">
                                                        <img src={ require('./images/new-back.png') } alt="" />
                                                </Link>
                                        </div>
                                        <div className={ style.ugou }>
                                                <span>我的优购</span>
                                        </div>
                                        <div className={ style.menu } onClick={ () => this.toggle(this.state.isClose) }>
                                                <img src={ require('./images/ico-menu.png') } alt="" />
                                        </div>
                                </div>
                                {this.state.isClose && (<PopUp></PopUp>)}
                                <div className={ style["profile-content"] }>
                                        <div className={ style.management }>
                                                <div className={ style["user-name"] }>
                                                        <img src={ require('./images/user.png') } alt="" className={ style.people } />
                                                        <span className={ style.name }>zhangsan</span>
                                                        <span className={ style.vip }>普通会员</span>
                                                        <img src={ require('./images/information-small.png') } alt="" className={ style.information } />
                                                        <Link to="/address" className={ style.account }>账户地址管理&gt;</Link>
                                                </div>
                                        </div>
                                        <div className={ style["user-info"] }>
                                                <div className={ style["my-order"] }>
                                                        <Link to="">
                                                                <p className={ style.title }>我的订单<span>全部订单</span></p>
                                                                <ul>
                                                                        <li>
                                                                                <i><img src={ require('./images/pay.png') } alt="" /></i>
                                                                                <span>待付款</span>
                                                                        </li>
                                                                        <li>
                                                                                <i><img src={ require('./images/logistics.png') } alt="" /></i>
                                                                                <span>查看物流</span>
                                                                        </li>
                                                                        <li>
                                                                                <i><img src={ require('./images/evaluate.png') } alt="" /></i>
                                                                                <span>待评价</span>
                                                                        </li>
                                                                </ul>
                                                        </Link>
                                                </div>
                                                <div className={ style["my-pay"] }>
                                                        <Link to="">
                                                                <p className={ style.title }>我的钱包</p>
                                                                <ul>
                                                                        <li>
                                                                                <i>0</i>
                                                                                <span>礼品卡</span>
                                                                        </li>
                                                                        <li>
                                                                                <i>3</i>
                                                                                <span>优惠券</span>
                                                                        </li>
                                                                        <li>
                                                                                <i>100</i>
                                                                                <span>积分</span>
                                                                        </li>
                                                                </ul>
                                                        </Link>
                                                </div>
                                                <div className={ style["user-list"] }>
                                                        <ul>
                                                                <li><Link to=""><i><img src={ require('./images/member.png') } alt="" /></i><span>用户中心</span></Link></li>
                                                                <li><Link to=""><i><img src={ require('./images/integration.png') } alt="" /></i><span>积分商城</span></Link></li>
                                                                <li><Link to=""><i><img src={ require('./images/past.png') } alt="" /></i><span>每日签到</span></Link></li>
                                                                <li><Link to=""><i><img src={ require('./images/service.png') } alt="" /></i><span>联系客服</span></Link></li>
                                                        </ul>
                                                </div>
                                                <div className={ [style["user-list"], style.sub].join(" ") }>
                                                        <ul>
                                                                <li><Link to=""><i><img src={ require('./images/collection.png') } alt="" /></i><span>收藏/关注</span></Link></li>
                                                                <li><Link to=""><i><img src={ require('./images/help.png') } alt="" /></i><span>帮助中心</span></Link></li>
                                                                <li><Link to=""><i><img src={ require('./images/suggession.png') } alt="" /></i><span>意见反馈</span></Link></li>
                                                                <li></li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className={ style.footer }>
                                                <div>
                                                        <span className={ style.name }>zhangsan</span>
                                                        <span>|</span>
                                                        <span className={ style["login-out"] }>退出</span>
                                                </div>
                                                <div>
                                                        <span>电脑版</span>
                                                        <span>客户端</span>
                                                        <span>微信</span>
                                                </div>
                                        </div>
                                        <footer>
                                                <p>百丽国际旗下购物网站</p>
                                                <p>Copyright © 2011-2018 优购 m.yougou.com</p>
                                        </footer>
                                </div>
                        </div>
                );
        }
}

export default Profile;