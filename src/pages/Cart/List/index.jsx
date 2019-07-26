import React from 'react';
import Presentation from './presentation.jsx';
import { connect } from 'react-redux';
import { CartActions } from '../../../store';

class Container extends React.Component {
        render() {
                return (
                        <Presentation { ...this.props } />
                );
        }
        componentDidMount() { this.props.init(); }
}

const mapStateToProps = state => ({
        list: state.cart.list
});
const mapDispatchToProps = dispatch => ({
        init: () => dispatch(CartActions.init())
});
export default connect(mapStateToProps, mapDispatchToProps)(Container);