import React from 'react';
import style from './index.module.scss';
import LeftContainer from '../../container/LeftContainer.jsx';
import RightContainer from '../../container/RightContainer.jsx';
import { UNav, PopUp } from '../../../../components';
import { withRouter } from 'react-router-dom';

class Wrapper extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isclose: false };
                this.toggle = this.toggle.bind(this);
        }
        render() {
                let { activeId, toggleId } = this.props;
                return (
                        <div className="page-wrapper">
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
                                        <div className={ style.menu } onClick={ () => this.toggle(this.state.isclose) }>
                                                <img src={ require('./ico-menu.png') } alt="" />
                                        </div>
                                </div>
                                {this.state.isclose && (<PopUp />)}
                                <div className={ style.content }>
                                        <div className={ style.left }>
                                                <LeftContainer activeId={ activeId } toggleId={ toggleId } />
                                        </div>
                                        <div className={ style.right }>
                                                <RightContainer activeId={ activeId } />
                                        </div>
                                </div>
                                <div className={ style.footer }>
                                        <UNav />
                                </div>
                        </div>
                );
        }
        toggle(flag) {
                this.setState({ isclose:!flag })
        }
}

export default withRouter(Wrapper);