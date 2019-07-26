import React from 'react';
import Presentation from './presentation.jsx';
import { DetailActions } from '../../../store';
import { connect } from 'react-redux';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.state = { data: {}, bannerList: '' };
        }
        render() {
                return (
                        <Presentation data={ this.state.data } bannerList={ this.state.bannerList } />
                );
        }
        componentDidMount() {
                this.props.getData({ id: this.props.pid})
                        .then(data => {
                                this.setState({ data: data.payload[0], bannerList: data.payload[0].bannerImgs })
                        })
        }
}

const mapStateToProps = state => ({
        data: state.detail.list[0],
        bannerList: state.detail.bannerImgs
});
const mapDispatchToProps = dispatch => ({
        getData: ajaxData => dispatch(DetailActions.getData(ajaxData))
});
export default connect(mapStateToProps, mapDispatchToProps)(Container);