import React from 'react';
import style from './index.module.scss';
import PopUp from '../../../../components/PopUp';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isClose: false };
                this.toggle = this.toggle.bind(this);
        }
        render() {
                return (
                        <>
                                <div className={ style.header }>
                                        <div className={ style.back } onClick={ this.props.history.goBack }>
                                                <span>
                                                        <img src={ require('./new-back.png') } alt="" />
                                                </span>
                                        </div>
                                        <div className={ style.search }>
                                                <img src={ require('./search.png') } alt="" />
                                                <span>请输入关键字</span>
                                        </div>
                                        <div className={ style.menu } onClick={ () => this.toggle(this.state.isClose) }>
                                                <img src={ require('./ico-menu.png') } alt="" />
                                        </div>
                                </div>
                                {this.state.isClose && <PopUp className={ style.popup } />}
                        </>
                );
        }
        toggle(flag) {
                this.setState({isClose: !flag});
        }
}

export default withRouter(Header);