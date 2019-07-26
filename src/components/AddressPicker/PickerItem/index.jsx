import React, { Component } from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import IScroll from 'iscroll';


class PickerItem extends Component{
        render(){
                return (
                        <div className={ style["picker-item"] } ref={ el => this.scrollDom = el }>
                                <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        {this.props.list.map((item, i) => (
                                                <li key={ i } style={{ textAlign: this.props.textAlign }}>{ item }</li>
                                        ))}
                                </ul>
                        </div>
                )
        }
        shouldComponentUpdate(nextProps, nextState) {
                return this.props.list !== nextProps.list;
        }
        componentDidUpdate() {
                if(!this.scroll) {
                        this.scroll = new IScroll(this.scrollDom, { snap: 'li',deceleration: 0.01 });
                        this.scroll.on('scrollEnd', () => {
                                this.props.change(this.props.list[this.scroll.currentPage.pageY]);
                        });
                } else {
                        this.scroll.refresh();
                        this.scroll.goToPage(0, 0, 0);
                }
        }
        componentWillUnmount() {
                if(this.scroll) {
                        this.scroll.destroy();
                        this.scroll = null;
                }
        }
}

PickerItem.propTypes = {
        change: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired,
        textAlign: PropTypes.string
};

PickerItem.defaultProps = {
        textAlign: 'center'
};

export default PickerItem;