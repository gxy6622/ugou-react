import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class LoginPhone extends React.Component {
        render() {
                let { code, login, getCode, changeCode, changePhone } = this.props;
                return (
                        <div className={ style["login-phone"] }>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="tel" placeholder="手机号" onBlur={ e => changePhone(e.target.value) } />
                                        <span className={ style.code } onClick={ getCode }>{ code }</span>
                                </div>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="text" placeholder="请输入验证码" onBlur={ e => changeCode(e.target.value) } />
                                </div>
                                <button className={ style["btn-phone"] } onClick= { login }>登录</button>
                                <span className={ style.gift }>新会员限时惊喜 首次登录送百元礼包</span>
                        </div>
                );
        }
}

LoginPhone.propTypes = {
        code: PropTypes.string.isRequired,
        getCode: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        changePhone: PropTypes.func.isRequired,
        changeCode: PropTypes.func.isRequired
};

export default LoginPhone;