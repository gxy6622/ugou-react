import React from 'react';
import style from './presentation.module.scss';
import Header from '../Header/presentation.jsx';
import Footer from '../Footer';
import Content from '../Content';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        currentPage: 1,
                };
        }
        toggleCurrentPage(flag) {
                this.setState({ currentPage: flag })
        }
        render() {
                return (
                        <div className={ style["detail-content"] }>
                                <div className={ style.wrapper }>
                                        <Header />
                                        <div className={ style.content }>
                                                <Content pid={ this.props.pid } />
                                                <div className={ style.style }>
                                                        <p className={ style.size }>已选<span>粉金色/尺码</span><i>&gt;</i></p>
                                                </div>
                                                <div className={ style["recomend-wrapper"] }>
                                                        <p className={ style.title }>评价(1)<span>&gt;</span></p>
                                                        <dl>
                                                                <dt>
                                                                        <span className={ style.phone }>139****</span>
                                                                        <img src={ require('./star.png') } alt="" />
                                                                        <img src={ require('./star.png') } alt="" />
                                                                        <img src={ require('./star.png') } alt="" />
                                                                        <img src={ require('./star.png') } alt="" />
                                                                        <img src={ require('./star.png') } alt="" />
                                                                        <span className={ style.date }>2019-05-27</span>
                                                                </dt>
                                                                <dd>
                                                                        <p className={ style.like }>非常喜欢 很舒适</p>
                                                                        <p className={ style.suit }>颜色：粉金色,尺码：35(合适)</p>
                                                                </dd>
                                                        </dl>
                                                </div>
                                                <div className={ style.brand }>
                                                        <Link to="">
                                                                <img src={ require('./teenmix.jpg') } alt="" />
                                                                <span className={ style.teen }>天美意</span>
                                                                <span className={ style.bali }>百丽优购</span>
                                                                <span className={ style.gt }>&gt;</span>
                                                        </Link>
                                                </div>
                                                <div className={ style["like-other"] }>
                                                        <p className={ style["like-more"] }>喜欢此商品的人还买了<span>&gt;</span></p>
                                                        <ul>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other01.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other02.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other03.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                        <ul>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other04.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other05.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./other/other06.jpg') } alt="" />
                                                                                <p>Teenmix/天美意夏黑色羊绒皮革/纺织品多条带方跟女凉鞋CDX06BL8</p>
                                                                                <span>￥278</span>
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className={ style.tab }>
                                                        <ul className={ style["main-tab"] }>
                                                                <li className={ this.state.currentPage === 1 ?  style.active : ' ' } onClick={ () => this.toggleCurrentPage(1) }><span>详情</span></li>
                                                                <li className={ this.state.currentPage === 2 ?  style.active : ' ' } onClick={ () => this.toggleCurrentPage(2) }><span>评价(1)</span></li>
                                                                <li className={ this.state.currentPage === 3 ?  style.active : ' ' } onClick={ () => this.toggleCurrentPage(3) }><span>推荐</span></li>
                                                        </ul>
                                                        <div className={ style["sub-tab"] + (this.state.currentPage === 1 ?  style.show : ' ') }>
                                                                <ul>
                                                                        <li>
                                                                                <p>商品参数</p>
                                                                        </li>
                                                                        <li>
                                                                                <p>尺码对照表</p>
                                                                        </li>
                                                                        <li>
                                                                                <p>图文详情</p>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                        <div className={ style["sub-tab"] + (this.state.currentPage === 2 ?  style.show : ' ') }>
                                                                <p style={{ height: '5rem' }}>非常喜欢 很舒适</p>
                                                        </div>
                                                        <div className={ style["sub-tab"] + (this.state.currentPage === 3 ?  style.show : ' ') }>
                                                                <ul>
                                                                        <li>
                                                                                <Link to="" >
                                                                                        <p style={{ color: '#333' }  }>Teenmix/天美意夏专柜同款黑色简约一字带厚底女凉鞋CD301BL8</p>
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="">
                                                                                        <p style={{ color: '#333' }  }>Teenmix/天美意夏专柜同款黑色简约一字带厚底女凉鞋CD301BL8</p>
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="">
                                                                                        <p style={{ color: '#333' }  }>Teenmix/天美意夏专柜同款黑色简约一字带厚底女凉鞋CD301BL8</p>
                                                                                </Link>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className={ style.footer }>
                                        <Footer pid={ this.props.pid } />
                                </div>
                        </div>
                );
        }
}

export default Presentation;