import React from 'react';
import Presentation from './presentation.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CartActions } from '../../../store';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.toggleAllSelect1 = this.toggleAllSelect1.bind(this);
        }
        render() {
                let props = Object.assign({}, this.props, {
                        toggleAllSelect1: this.toggleAllSelect1
                });
                return (
                        <Presentation { ...props } />
                );
        }
        componentWillReceiveProps(nextProps) {
                if(nextProps.orderId !== this.props.orderId) {
                        this.props.history.push(`/order/${ nextProps.orderId }`)
                }
        }
        toggleAllSelect1() { this.props.toggleAllSelect1(!this.props.allSelect1Checked); }
}

const mapStateToProps = state => {
        return {
                orderId: state.cart.orderId,
                allSelect1Checked: state.cart.list.every(item => item.select1),
                totalPrice: state.cart.list.filter(item =>item.select1).reduce((total, item) => total + item.price * item.count, 0),
                totalCount: state.cart.list.filter(item => item.select1).reduce((total, item) => total + item.count, 0)
        };
};
const mapDispatchToProps = dispatch => {
        return {
                toggleAllSelect1: checked => dispatch(CartActions.toggleAll1(checked)),
                remove: () => dispatch(CartActions.remove()),
                settlement: () =>dispatch(CartActions.settlement())
        };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));