import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class LoginPwd extends React.Component {
        render() {
                let { login, changeAccount, changePwd } = this.props;
                return (
                        <div className={ style["login-pwd"] }>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="text" placeholder="手机号/邮箱" onBlur={ e => changeAccount(e.target.value) } />
                                </div>
                                <div className={ [style["form-item-wrapper"], style["pwd-img-position"]].join(' ')  }>
                                        <input type="password" placeholder="密码" onBlur={ e => changePwd(e.target.value) } />
                                                <div className={ style["pwd-img"] }>
                                                        <img src={ require('./login/close_eye.png') } className={ style.close } alt="" />
                                                        <img src={ require('./login/open_eye.png') } className={ style.open } alt="" />
                                                </div>
                                </div>
                                <button className={ style["btn-login"] } onClick={ login }>登录</button>
                                <span className={ style.forgot }>忘记密码</span>
                        </div>
                );
        }
}

LoginPwd.propTypes = {
        login: PropTypes.func.isRequired,
        changeAccount: PropTypes.func.isRequired,
        changePwd: PropTypes.func.isRequired

};
export default LoginPwd;