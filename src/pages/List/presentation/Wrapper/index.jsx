import React from 'react';
import style from './index.module.scss';
import HeaderContainer from '../../container/HeaderContainer.jsx';
import ContentContainer from '../../container/ContentContainer.jsx';
import { Link } from 'react-router-dom';

class Wrapper extends React.Component {
        constructor(props) {
                super(props);
                this.state = { isclose: false };
                this.toggle = this.toggle.bind(this);
        }
        render() {
                return (
                        <div className="page-wrapper">
                                {/*<div className={ style.header }>*/}
                                        {/*<HeaderContainer />*/}
                                {/*</div>*/}
                                <HeaderContainer />
                                {/*<div className={ style.content }>*/}
                                        {/*<ContentContainer sId={ this.props.sId } />*/}
                                {/*</div>*/}
                                <ContentContainer sId={ this.props.sId } />
                                <div className={ style.cart }>
                                        <Link to="/cart" />
                                </div>
                                <div className={ style.footer }>
                                        <ul className={ style.aa }>
                                                <li className={ style.first }>
                                                        <span onClick={ () => this.toggle(this.state.isclose) }>商品分类</span>
                                                        {this.state.isclose && (
                                                                <ul className={ style.list }>
                                                                        <li><Link to="#">品质男鞋</Link></li>
                                                                        <li><Link to="#">瘦腿长靴</Link></li>
                                                                        <li><Link to="#">人气中短靴</Link></li>
                                                                        <li><Link to="#">浅口单鞋</Link></li>
                                                                        <li><Link to="#">深口单鞋</Link></li>
                                                                        <li><Link to="#">潮流小白鞋/老爹鞋</Link></li>
                                                                </ul>
                                                        )}
                                                </li>
                                                <li>
                                                        <Link to="#">品牌故事</Link>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                );
        }
        toggle(flag) {
                this.setState({ isclose: !flag });
        }
}

export default Wrapper;