import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IScroll from 'iscroll/build/iscroll-probe';
import imagesLoaded from 'imagesloaded';

class Content extends React.Component {
        render() {
                let { list, hasMore } = this.props;
                console.log(hasMore);
                return (
                        <div className={ style.content }>
                                <div className={ style["content-wrapper"] } ref={ el => this.scrollDom = el }>
                                        <div className={ style["content-scroll"] }>
                                                <div className={ style.banner }>
                                                        <img src={ require('./banner.jpg') } alt="" />
                                                        <div className={ style.focus }>
                                                                <span>4585人关注</span>
                                                                <Link to="#">
                                                                        <img src={ require('./noFocus.png') } alt="" />
                                                                        <span>关注</span>
                                                                </Link>
                                                        </div>
                                                </div>
                                                <div className={ style["srch-order"] }>
                                                        <ul>
                                                                <li className={ style.active }>综合</li>
                                                                <li>销量</li>
                                                                <li>
                                                                        价格
                                                                        <img src={ require('./gray.png') } alt="" />
                                                                </li>
                                                                <li>新品</li>
                                                                <li>
                                                                        筛选
                                                                        <img src={ require('./select.png') } alt="" />
                                                                </li>
                                                        </ul>
                                                </div>
                                                {list.length > 0 && (
                                                        <ul className={ style["content-main"] }>
                                                                {list.map(item => (
                                                                        <li key={ item.id }>
                                                                                <Link to={ `/detail/${ item.id }` }>
                                                                                        <div className={ style["avatar-wrapper"] }>
                                                                                                <img src={ item.avatar } alt="" />
                                                                                                <span className={ style["mark-price"] }>￥{ item.markPrice }</span>
                                                                                        </div>
                                                                                        <p className={ style.name } style={{"WebkitBoxOrient": "vertical"}}>{ item.name }</p>
                                                                                        <span className={ style.price }>￥{ item.price }</span>
                                                                                        <span className={ style["old-price"] }>￥{ item.oldPrice }</span>
                                                                                </Link>
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                )}
                                                {hasMore ? (
                                                        <p ref={ el => this.uploadTip = el }></p>
                                                ) : (
                                                        <p>{ list.length > 0 ? '已到达底部..' : '暂无商品，敬请期待..' }</p>
                                                )}
                                        </div>
                                </div>
                        </div>
                );
        }
        componentDidUpdate() { this.initAndRefresh(); }
        componentWillUnmount() {
                if(this.scroll) {
                        this.scroll.destroy();
                        this.scroll = null;
                }
        }
        initAndRefresh() {
                if(this.props.hasMore) this.uploadTip.innerText = '上拉加载';
                imagesLoaded(this.scrollDom, () => {
                        setTimeout(() => {
                                if(!this.scroll) {
                                        let isLoading = false, threshold = 30, that = this;
                                        this.scroll = new IScroll(this.scrollDom, { click: true, probeType: 2 });
                                        this.scroll.on('scroll', function() {   //用户在拖，没有放手
                                                if(that.props.hasMore && !isLoading) {
                                                        if(this.y < 0 && this.maxScrollY - this.y >= threshold) {
                                                                that.uploadTip.innerText = '放手立即加载...';
                                                                that.loadFlag = true;
                                                        }
                                                        else {  //用户又不加载了
                                                                that.uploadTip.innerText = '上拉加载...';
                                                                that.loadFlag = false;
                                                        }
                                                }
                                        });
                                        this.scroll.on('scrollEnd', () => {     //用户放手
                                                if(this.loadFlag) {
                                                        this.loadFlag = false;
                                                        isLoading = true;
                                                        this.uploadTip.innerText = '加载中...';
                                                        setTimeout(() => {
                                                                this.props.loadMore()
                                                                        .then(() => isLoading = false);
                                                        },2000);
                                                }
                                        });
                                } else {
                                        this.scroll.refresh();
                                        console.log('刷新了')
                                }
                        }, 100)
                })
        }
}

Content.propTypes = {
        list: PropTypes.array.isRequired,
        hasMore: PropTypes.bool.isRequired,
        loadMore: PropTypes.func.isRequired
};

export default Content;