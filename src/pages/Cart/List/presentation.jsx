import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

class Presentation extends React.Component {
        render() {
                return (
                        <>
                                {this.props.list.length > 0 ? (
                                        <ul className={ style["cart-list"] }>
                                                {this.props.list.map(item => (
                                                        <li key={ item.id }>
                                                                <ListItem { ...item } />
                                                        </li>
                                                ))}

                                        </ul>
                                ) : (
                                        <p className={ style["else-cart"] }>购物车暂无商品</p>
                                )}
                        </>
                );
        }
}

Presentation.propTypes = {
        list: PropTypes.arrayOf(
                PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        pid: PropTypes.number.isRequired,
                        name: PropTypes.string.isRequired,
                        avatar: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired,
                        count: PropTypes.number.isRequired,
                        select1: PropTypes.bool.isRequired
                })
        ).isRequired
};
export default Presentation;