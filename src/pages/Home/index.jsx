import React from 'react';
import style from './index.module.scss';
import { UNav } from '../../components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

class Home extends React.Component {
        render() {
                let settings = {
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                };
                return (
                        <div className={ style["home-wrapper"] }>
                                <div className={ style.header }>
                                        <div className={ style.logo }>
                                                <img src={ require('./images/logo.png') } alt="" />
                                        </div>
                                        <div className={ style.search }>
                                                <img src={ require('./images/search-gray.png') } alt="" />
                                        </div>
                                        <div className={ style.message }>
                                                <img src={ require('./images/information-small.png') } alt="" />
                                        </div>
                                </div>
                                <div className={ style.content }>
                                        <div className={ style.banner }>
                                                <Slider { ...settings }>
                                                        <div>
                                                                <Link to=""><img src={ require('./images/banner01.jpg') } alt="" /></Link>
                                                        </div>
                                                        <div>
                                                                <Link to=""><img src={ require('./images/banner02.jpg') } alt="" /></Link>
                                                        </div>
                                                        <div>
                                                                <Link to=""><img src={ require('./images/banner03.jpg') } alt="" /></Link>
                                                        </div>
                                                        <div >
                                                                <Link to=""><img src={ require('./images/banner04.jpg') } alt="" /></Link>
                                                        </div>
                                                        <div >
                                                                <Link to=""><img src={ require('./images/banner05.jpg') } alt="" /></Link>
                                                        </div>
                                                        <div>
                                                                <Link to=""><img src={ require('./images/banner06.jpg') } alt="" /></Link>
                                                        </div>
                                                </Slider>
                                        </div>
                                        <div className={ style.select }>
                                                <ul>
                                                        <li><Link to=""><img src={ require('./images/sign.png') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/custom.png') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/plus.png') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/custom.png') } alt="" /></Link></li>
                                                </ul>
                                        </div>
                                        <div className={ style.hot }>
                                                <p>热门分类</p>
                                                <ul className={ style["hot-img"] }>
                                                        <li><Link to=""><img src={ require('./images/hot01.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot02.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot03.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot04.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot05.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot06.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot07.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot08.jpg') } alt="" /></Link></li>
                                                </ul>
                                                <ul className={ style["hot-brand"] }>
                                                        <li><Link to=""><img src={ require('./images/hot09.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot10.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot11.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot12.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot13.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot14.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot15.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot16.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot17.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/hot18.jpg') } alt="" /></Link></li>
                                                </ul>
                                        </div>
                                        <div className={ style.time }>
                                                <p className={ style.title }>限时秒杀</p>
                                                <div className={ style["limit-time"] }>
                                                        <div className={ style.left }>
                                                                <Link to="">
                                                                        <img src={ require('./images/time01.jpg') } alt="" />
                                                                </Link>
                                                        </div>
                                                        <div className={ style.right }>
                                                                <div className={ style.top }>
                                                                        <p>爆款限时秒杀</p>
                                                                        <p className={ style.p1 }>鞋靴特卖</p>
                                                                        <p>爆款秒杀</p>
                                                                        <p>GO&gt;</p>
                                                                        <Link to=""><img src={ require('./images/right01.jpg') } alt="" /></Link>
                                                                </div>
                                                                <div className={ style.bottom }>
                                                                        <p className={ style.p2 }>运动休闲</p>
                                                                        <p>好货限量</p>
                                                                        <p className={ style.p3 }>GO&gt;</p>
                                                                        <Link to=""><img src={ require('./images/right02.jpg') } alt="" /></Link>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={ style.jxactive }>
                                                <p>精选活动</p>
                                                <ul>
                                                        <li><Link to=""><img src={ require('./images/jx01.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/jx02.jpg') } alt="" /></Link></li>
                                                        <li><Link to=""><img src={ require('./images/jx03.jpg') } alt="" /></Link></li>
                                                </ul>
                                        </div>
                                        <div className={ style["brand-zoon"] }>
                                                <p>品牌专区</p>
                                                <div className={ style["brand-zoon-list"] }>
                                                        <Link to="" className={ style["brand-banner"] }>
                                                                <img src={ require('./images/brand/pp101.jpg') } alt="" />
                                                        </Link>
                                                        <ul className={ style["brand-list"] }>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp102.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥479</span>
                                                                                        <span className={ style["old-price"] }>￥799</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp103.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥109</span>
                                                                                        <span className={ style["old-price"] }>￥169</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp104.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥349</span>
                                                                                        <span className={ style["old-price"] }>￥559</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp105.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥179</span>
                                                                                        <span className={ style["old-price"] }>￥299</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className={ style["brand-zoon-list"] }>
                                                        <Link to="" className={ style["brand-banner"] }>
                                                                <img src={ require('./images/brand/pp201.jpg') } alt="" />
                                                        </Link>
                                                        <ul className={ style["brand-list"] }>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp202.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥658</span>
                                                                                        <span className={ style["old-price"] }>￥899</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp203.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥688</span>
                                                                                        <span className={ style["old-price"] }>￥959</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp204.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥618</span>
                                                                                        <span className={ style["old-price"] }>￥959</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link to="">
                                                                                <img src={ require('./images/brand/pp205.jpg') } alt="" />
                                                                                <p>
                                                                                        <span className={ style.price }>￥618</span>
                                                                                        <span className={ style["old-price"] }>￥959</span>
                                                                                </p>
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className={ style["for-you"] }>
                                                <p>为你推荐</p>
                                                <ul className={ style.title }>
                                                        <li className={ style.active }>新品</li>
                                                        <li>钜惠</li>
                                                        <li>人气</li>
                                                </ul>
                                                <span className={ style.change }>
                                                        换一换
                                                        <img src={ require('./images/for_you/refresh.png') } alt="" />
                                                </span>
                                                <ul className={ style["for-you-content"] }>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for01.jpg') } alt="" />
                                                                                <p>￥458</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for02.jpg') } alt="" />
                                                                                <p>￥559</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for03.jpg') } alt="" />
                                                                                <p>￥618</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for04.jpg') } alt="" />
                                                                                <p>￥139</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for05.jpg') } alt="" />
                                                                                <p>￥139</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for06.jpg') } alt="" />
                                                                                <p>￥458</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for07.jpg') } alt="" />
                                                                                <p>￥139</p>
                                                                </Link>
                                                        </li>
                                                        <li>
                                                                <Link to="">
                                                                        <img src={ require('./images/for_you/for08.jpg') } alt="" />
                                                                                <p>￥478</p>
                                                                </Link>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className={ style["content-bottom"] }>
                                                <div>
                                                        <span>登录</span>
                                                        <span>|</span>
                                                        <span>退出</span>
                                                </div>
                                                <div>
                                                        <span>电脑版</span>
                                                        <span>客户端</span>
                                                        <span>微信</span>
                                                </div>
                                        </div>
                                        <footer>
                                                <p>百丽国际旗下购物网站</p>
                                                <p>Copyright © 2011-2018 优购 m.yougou.com</p>
                                        </footer>
                                </div>
                                <div className={ style.footer }>
                                        <UNav />
                                </div>
                        </div>
                );
        }
}

export default Home;