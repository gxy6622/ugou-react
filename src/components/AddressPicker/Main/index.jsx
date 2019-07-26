import React, { PureComponent } from 'react';
import style from './index.module.scss';
import PickerItem from '../PickerItem';

export default class Presentation extends PureComponent{
        render(){
                let {
                        changeProvince, provinces,
                        changeCity, cities,
                        changeArea, areas,
                        isShow, ok, cancel }
                        = this.props;
                return (
                        <div  className={ `${ style["city-picker"] } ${ isShow ? style.show : '' }` }>
                                <div className={ style.header }>
                                        <button onClick={ cancel }>取消</button>
                                        <button onClick={ ok }>确定</button>
                                </div>
                                <div className={ style.body }>
                                        <div className={ style["scroll-wrapper"] }>
                                                <PickerItem list={ provinces } change={ changeProvince } textAlign='left' />
                                        </div>
                                        <div className={ style["scroll-wrapper"] }>
                                                <PickerItem list={ cities } change={ changeCity } />
                                        </div>
                                        <div className={ style["scroll-wrapper"] }>
                                                <PickerItem list={ areas } change={ changeArea } textAlign='right' />
                                        </div>
                                </div>
                        </div>
                )
        }
}