import React from 'react';
import style from './index.module.scss';
import LoginPhoneContainer from '../../container/LoginPhoneContainer.jsx';
import LoginPwdContainer from '../../container/LoginPwdContainer';
import { Route, Link, Redirect, withRouter, NavLink } from 'react-router-dom';

class Wrapper extends React.Component {
        render(){
                return (
                        <div className={ style["login-wrapper"] }>
                                <header>
                                        <div className={ style.login }>
                                                <Link to="#" onClick={ this.props.history.goBack }>
                                                        <img src={ require('./new-back.png') } alt="" />
                                                </Link>
                                        </div>
                                        <span className={ style.title }>登录</span>
                                </header>
                                <div className={ style.main }>
                                        <div className={ style["login-type"] }>
                                                <NavLink className={ style["title-phone"] } activeClassName={ style.active } to="/login/phone">
                                                手机号快捷登录
                                                </NavLink>
                                                <NavLink className={ style["title-pwd"] } activeClassName={ style.active } to="/login/pwd">
                                                账号密码登录
                                                </NavLink>
                                        </div>
                                        <div>
                                                <Redirect to="/login/phone" />
                                                <Route path="/login/phone" component={ LoginPhoneContainer } />
                                                <Route path="/login/pwd" component={ LoginPwdContainer } />
                                        </div>
                                </div>
                                <div className={ style["login-other"] }>
                                        <div className={ style.hd }>
                                                <span>第三方平台登录</span>
                                        </div>
                                        <ul>
                                                <li><Link to="#"><img src={ require('./QQ.png') } alt="" /></Link></li>
                                                <li><Link to="#"><img src={ require('./pay.png') } alt="" /></Link></li>
                                                <li><Link to="#"><img src={ require('./sina.png') } alt="" /></Link></li>
                                        </ul>
                                        <p>首次登录表示您同意<Link to="#">优购会员注册协议</Link></p>
                                </div>
                                <div className={ style.footer }>
                                        <ul>
                                                <li><img src={ require('./ensure.png') } alt="" />正品保障</li>
                                                <li><img src={ require('./ensure.png') } alt="" />10天退货</li>
                                                <li><img src={ require('./ensure.png') } alt="" />10天补差价</li>
                                        </ul>
                                </div>
                        </div>
                );
        }
}

export default withRouter(Wrapper);