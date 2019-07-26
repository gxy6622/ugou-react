import React from 'react';
import style from './presentation.module.scss';
import PopUp from '../../../components/PopUp';
import { Link } from 'react-router-dom';
import { AddressPicker } from '../../../components';

class Presentation extends React.Component {
        constructor(props) {
                super(props);
                this.state = { addrInput: null };
        }
        render() {
                return (
                        <div className={ style["page-wrapper"] }>
                                <input type="text" className={ style.addr } ref={ el => this.addrInput = el } />
                                <AddressPicker target={ this.state.addrInput } />
                                {/*<div className={ style.wrapper }>*/}
                                        {/*<div className={ style.header }>*/}
                                                {/*<div className={ style.back }>*/}
                                                        {/*<span onClick={ () => this.props.history.goBack }>*/}
                                                                {/*<img src={ require('./new-back.png') } alt="" />*/}
                                                        {/*</span>*/}
                                                {/*</div>*/}
                                                {/*<div className={ style.ugou }>*/}
                                                        {/*<span>收货地址</span>*/}
                                                {/*</div>*/}
                                                {/*<div className={ style.menu } onClick="isShow = !isShow">*/}
                                                        {/*<img src={ require('./ico-menu.png') } alt="" />*/}
                                                {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<PopUp></PopUp>*/}
                                {/*</div>*/}
                                {/*<div className={ style.content }>*/}
                                        {/*<ul className={ style["address-wrapper"] }>*/}
                                                {/*<li v-for="item in list" key="item.id">*/}
                                                        {/*<div className={ style["address-list"] }>*/}
                                                                {/*<ul>*/}
                                                                        {/*<li className={ style.first }>*/}
                                                                                {/*<span className={ style.name } v-text="item.receiveName"></span>*/}
                                                                                {/*<span className={ style.phone } v-text="item.receiveTel"></span>*/}
                                                                        {/*</li>*/}
                                                                        {/*<li className={ style.second }>*/}
                                                                                        {/*<span className={ style.address } v-text="item.receiveAddress"></span>*/}
                                                                        {/*</li>*/}
                                                                {/*</ul>*/}
                                                                {/*<p className={ style.clearfix }>*/}
                                                                        {/*<span className={ style.default }><img src={ require('./icon_checkbox_uncheck.png') } alt="" />设为默认地址</span>*/}
                                                                        {/*<span className={ style.edit } onClick="editAddress2(item.id)"><img src={ require('./edit.png') } alt="" />编辑</span>*/}
                                                                        {/*<span className={ style.remove } onClick="removeAddress2(item.id)"><img src={ require('./delete.png') } alt="" />删除</span>*/}
                                                                {/*</p>*/}
                                                        {/*</div>*/}
                                                {/*</li>*/}
                                        {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className={ style["update-address"] } v-show="isActive">*/}
                                        {/*<div className={ style.wrapper }>*/}
                                                {/*<div className={ style.header }>*/}
                                                        {/*<div className={ style.back }>*/}
                                                                {/*<Link to="/address">*/}
                                                                        {/*<img src={ require('./new-back.png') } alt="" />*/}
                                                                {/*</Link>*/}
                                                        {/*</div>*/}
                                                        {/*<div className={ style.ugou }>*/}
                                                                {/*<span>修改收货地址</span>*/}
                                                        {/*</div>*/}
                                                        {/*<div className={ style.menu } onClick="isShow = !isShow">*/}
                                                                {/*<img src={ require('./ico-menu.png') } alt="" />*/}
                                                        {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<PopUp></PopUp>*/}
                                        {/*</div>*/}
                                        {/*<form name="address">*/}
                                                {/*<input type="hidden" name="mode" />*/}
                                                {/*<label>*/}
                                                        {/*<span className={ [style["receive-name"], style.receive].join(' ') }>收货人</span>*/}
                                                        {/*<input type="text" className={ style["name-input"] } v-model="lists.receiveName" />*/}
                                                {/*</label>*/}
                                                {/*<label>*/}
                                                        {/*<span className={ [style["receive-phone"], style.receive].join(' ') }>联系电话</span>*/}
                                                        {/*<input type="text" className={ style["phone-input"] } v-model="lists.receiveTel" />*/}
                                                {/*</label>*/}
                                                {/*<label>*/}
                                                        {/*<span className={ [style["receive-area"], style.receive].join(' ') }>所在地区</span>*/}
                                                        {/*<span className={ style.city } onClick="toAddress" v-model="city"></span>*/}
                                                        {/*<p className={ style.pwrap }>*/}
                                                                {/*<v-distpicker type="mobile" onselected="selected" v-show="addInp" className="area1"></v-distpicker>*/}
                                                        {/*</p>*/}
                                                        {/*<div className={ style.blacks } v-show="mask" onClick="closeMask"></div>*/}
                                                {/*</label>*/}
                                                {/*<button className={ style["save-address"] } onClick="saveAddress">保存地址</button>*/}
                                        {/*</form>*/}
                                {/*</div>*/}
                                {/*<div className={ style["add-wrapper"] }>*/}
                                        {/*<span className={ style["add-address"] }  onClick="addAddress2">新增地址</span>*/}
                                {/*</div>*/}
                        </div>
                );
        }
        componentDidMount() {
                this.setState({ addrInput: this.addrInput })
        }
}

export default Presentation;