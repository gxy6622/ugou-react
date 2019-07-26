import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Presentation extends React.Component {
        render() {
                let settings = {
                        autoplay: true,
                        dots:true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                };
                return (
                        <div className={ style["swiper-container"] }>
                                <ul className={ style["swiper-wrapper"] }>
                                        <Slider { ...settings }>
                                                {this.props.bannerList.split(',').map(item => (
                                                        <li className={ style["swiper-slide"] } key={ item }>
                                                                <img src={ item } alt="" />
                                                        </li>
                                                ))}
                                        </Slider>
                                </ul>
                                <p className={ style.name }>{ this.props.data.name }</p>
                                <i className={ style.dec }>￥<span className={ style.price }>{ this.props.data.price }</span></i>
                                <i className={ style.dect }>￥<span className={ style["old-price"] }>{ this.props.data.oldPrice }</span></i>
                        </div>
                );
        }
}

Presentation.propTypes = {
        data: PropTypes.object.isRequired
};
export default Presentation;