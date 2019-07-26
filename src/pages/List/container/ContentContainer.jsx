import React from 'react';
import Content from '../presentation/Content';
import { connect } from 'react-redux';
import { ProductActions } from '../../../store';

class ContentContainer extends React.Component {
        constructor(props) {
                super(props);
                this.state = { pageSize: 6, hasMore: true };
                this.loadMore = this.loadMore.bind(this);
        }
        render() {
                return (
                        <Content
                                list={ this.props.list }
                                hasMore={ this.state.hasMore }
                                loadMore={ this.loadMore } />
                );
        }
        componentDidMount() {
                this.props.getData({ cid: this.props.sId, begin: 0, count: this.state.pageSize })
                        .then(length => this.setState({ hasMore: length === this.state.pageSize }));
        }
        componentWillReceiveProps(nextProps) {
                if(this.props.sId !== nextProps.sId) {  //表示切换分类
                        this.props.getData({ cid: this.props.sId, begin: 0, count: this.state.pageSize })
                                .then(length => this.setState({ hasMore: length === this.state.pageSize }));
                }
        }
        loadMore() {
                return this.props.getData({ cid: this.props.sId, begin: this.props.list.length, count: this.state.pageSize })
                        .then(length => this.setState({ hasMore: length === this.state.pageSize }));
        }
}
const mapStateToProps = (state, props) => ({
        list: state.product.list
});
const mapDispatchToProps = (dispatch, props) => ({
        getData: ajaxData => dispatch(ProductActions.getData(ajaxData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);