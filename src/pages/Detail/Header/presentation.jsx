import React from 'react';
import style from './presentation.module.scss';
import PopUp from '../../../components/PopUp';
import { withRouter } from 'react-router-dom';

class Presentation extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isClose: false };
        }
        toggle(flag) {
                this.setState({ isClose: !flag });
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
                                        <div className={ style.ugou }>
                                                <span>商品详情</span>
                                        </div>
                                        <div className={ style.menu } onClick={ () => this.toggle(this.state.isClose) }>
                                                <img src={ require('./ico-menu.png') } alt="" />
                                        </div>
                                </div>
                                {this.state.isClose && (<PopUp></PopUp>)}
                        </>
                );
        }
}

export default withRouter(Presentation);