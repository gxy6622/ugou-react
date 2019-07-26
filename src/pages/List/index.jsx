import React from 'react';
import Wrapper from './presentation/Wrapper';
// import { connect } from 'react-redux';
// import { CategoryActions } from '../../store/';

class List extends React.Component {
        render() {
                //let mId = parseInt(this.props.match.params.mId);
                let sId = parseInt(this.props.match.params.sId);
                //this.mId = mId;
                this.sId = sId;
                return (
                        <Wrapper sId={ sId } />
                );
        }
        //componentDidMount() {
                //通知仓库区初始化一级分类数据，解决直接在list页面刷新问题
                // this.props.getData(0)
                //         .then(result => {
                //                 if(typeof result !== 'undefined') {
                //                         this.props.getData(parseInt(this.props.match.mId));
                //                 }
                //         })
        //}
        shouldComponentUpdate(nextProps, nextState) {
                return /^\/list\/\d+\/\d+$/.test(nextProps.location.pathname) && (
                        //this.mId !== parseInt(nextProps.match.params.mId) ||
                                this.sId !== parseInt(nextProps.match.params.sId)
                );
        }
}

// const mapDispatchToProps =(dispatch, props) => ({
//         getData: fid => dispatch(CategoryActions.getData(fid))
// });
export default List;