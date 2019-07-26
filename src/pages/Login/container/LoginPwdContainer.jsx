import React from 'react';
import LoginPwd from '../presentation/LoginPwd';
import { LoginAPI } from '../../../utils/API.js';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

class LoginPwdContainer extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        loginInfo: { account: '', pwd: '' }
                };
                this.login = this.login.bind(this);
                this.changeAccount = this.changeAccount.bind(this);
                this.changePwd = this.changePwd.bind(this);
        }
        render() {
                return (
                        <LoginPwd
                                login={ this.login }
                                changeAccount={ this.changeAccount }
                                changePwd={ this.changePwd }/>
                );
        }
        login() {
                LoginAPI.loginPwd(this.state.loginInfo)
                        .then(() => this.props.history.replace(Cookies.get('target') || '/'));
        }
        changeAccount(account) {
                this.setState({ loginInfo: Object.assign({}, this.state.loginInfo, { account }) });
        }
        changePwd(pwd) {
                this.setState({ loginInfo: Object.assign({}, this.state.loginInfo, { pwd }) });
        }
}

export default withRouter(LoginPwdContainer);