import React from 'react';
import Presentation from './presentation.jsx';
import { OrderActions } from '../../../store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.state = { account: 0 };
        }
        render() {
                return (
                        <Presentation list={ this.props.list } account={ this.state.account }/>
                );
        }
        componentDidMount() {
                console.log(this.props.match.params.orderId);
                this.props.getData({ orderId: this.props.match.params.orderId })
                        .then(data => {
                                this.setState({ account: data.payload[0].account });
                        });
        }

}

const mapStateToProps = state => ({
        list: state.order.list
});
const mapDispatchToProps = dispatch => ({
        getData: ajaxData => dispatch(OrderActions.getData(ajaxData))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));