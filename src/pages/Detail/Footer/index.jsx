import React from 'react';
import Presentation from './presentation.jsx';
import { connect } from 'react-redux';
import { DetailActions } from '../../../store';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.state = { count: 1 };
                this.addCart2 = this.addCart2.bind(this);
        }
        render() {
                return (
                        <Presentation addCart2={ this.addCart2 } />
                );
        }
        addCart2() {
                this.props.addCart({ pid: this.props.pid, count: this.state.count })
                        .then(() => {
                                alert('成功添加购物车..');
                        })
        }
}

const mapDispatchToProps = (dispatch, props) => ({
        addCart: ajaxData => dispatch(DetailActions.addCart(ajaxData))
});
export default connect(null, mapDispatchToProps)(Container);