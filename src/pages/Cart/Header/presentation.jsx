import React from 'react';
import style from './presentation.module.scss';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import PopUp from '../../../components/PopUp';
import { withRouter } from 'react-router-dom';

class Presentation extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isClose: false };
        }
        render() {
                return (
                        <>
                                <div className={ style.header }>
                                        <div className={ style.back } >
                                                <span onClick={ this.props.history.goBack }>
                                                        <img src={ require('./new-back.png') } alt="" />
                                                </span>
                                        </div>
                                        <div className={ style.cart }>
                                                <span>购物车</span>
                                        </div>
                                        {Cookies.get('user') ? (
                                                <Link to="" className={ style.login }></Link>
                                        ) : (
                                                <Link to="/login" className={ style.login }>登录</Link>
                                        )}

                                        <div className={ style.menu } onClick={ () => this.toggle(this.state.isClose) } >
                                                <img src={ require('./ico-menu.png') } alt="" />
                                        </div>
                                </div>
                                {this.state.isClose && <PopUp />}
                        </>
                );
        }
        toggle(flag) {
                this.setState({ isClose: !flag })
        }
        back() {

        }
}

export default withRouter(Presentation);