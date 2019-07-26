import React, {Component} from 'react';
import PropTypes from 'prop-types';
import regions from './regions.js';
import Presentation from './Main';


class AddressPicker extends Component{
        constructor(props){
                super(props);
                this.state = {
                        provinces: [],   // 省列表
                        province: '',     // 选择的省
                        cities: [],          // 市列表
                        city: '',             // 选择的市
                        areas: [],         // 区列表
                        area: '',           // 选择的区
                        isShow: false, // 是否显示picker
                };
                this.changeProvince = this.changeProvince.bind(this);
                this.changeCity = this.changeCity.bind(this);
                this.changeArea = this.changeArea.bind(this);
                this.ok = this.ok.bind(this);
                this.cancel = this.cancel.bind(this);
        }
        componentDidMount() {
                let provinces = regions.provincesArr, province = provinces[0],
                        cities = regions.provinces[province].citiesArr, city = cities[0],
                        areas = regions.provinces[province].cities[city].areasArr, area = areas[0];
                this.setState({ provinces, province, cities, city, areas, area });

        }
        componentWillReceiveProps(nextProps) {
                if(nextProps.target) {
                        nextProps.target.addEventListener('focus', () => this.setState({ isShow: true }));
                        // nextProps.target.addEventListener('blur', () => this.setState({ isShow: false }));
                }
        }
        changeProvince(province) {
                let cities = regions.provinces[province].citiesArr, city = cities[0],
                        areas = regions.provinces[province].cities[city].areasArr, area = areas[0];
                this.setState({ province, cities, city, areas, area });
        }
        changeCity(city) {
                let areas = regions.provinces[this.state.province].cities[city].areasArr, area = areas[0];
                this.setState({ city, areas, area });
        }
        changeArea(area) { this.setState({ area }); }
        ok() {
                this.props.target.value = `${ this.state.province } - ${ this.state.city } - ${ this.state.area }`;
                this.setState({ isShow: false });
        }
        cancel() { this.setState({ isShow: false }); }
        render(){
                return (
                        <Presentation
                                isShow={ this.state.isShow }
                                provinces={ this.state.provinces }
                                cities={ this.state.cities }
                                areas={ this.state.areas }
                                changeProvince={ this.changeProvince }
                                changeCity={ this.changeCity }
                                changeArea={ this.changeArea }
                                ok={ this.ok }
                                cancel={ this.cancel }
                        />
                )
        }
}

AddressPicker.propTypes = {
        target: PropTypes.object.isRequired
};

export default AddressPicker;