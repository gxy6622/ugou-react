import React from 'react';
import Wrapper from './presentation/Wrapper';
import { connect } from 'react-redux';         //通过connect方法将仓库里的state值映射到组件
import { CategoryActions } from '../../store';

class Category extends React.Component {
        constructor(props) {
                super(props);
                this.state = { activeId: 0 };
                this.toggleId = this.toggleId.bind(this);
                console.log('缓存后category的constructor函数执行了...');
        }
        toggleId(activeId) {
                this.setState({ activeId });         //如果组件里有自己的state数值，需要调用setState方法修改
                this.props.getData(activeId);
                //CategoryAPI.getData({ fid: activeId })  //通知仓库改二级数据
                        //.then(data => this.props.appendData(data));
        }
        render() {
                return (
                        <Wrapper activeId={ this.state.activeId } toggleId={ this.toggleId } />
                );
        }
        componentDidMount() {
                this.props.getData(0)
                        .then(activeId => this.toggleId(activeId));
                //CategoryAPI.getData({ fid: 0 }) //请求一级
                       // .then(activeId => {
                                //把回来的数据的第一项的id取出来作为当前激活的id
                                //this.toggleId(activeId);
                                //通知仓库追加数据（改一级数据）
                                //this.props.appendData(data);
                        //})
        }
        //阻止不相关的会绑架category组件更新
        shouldComponentUpdate(nextProps, nextState) {
                return nextProps.location.pathname === '/category' && this.state.activeId !== nextState.activeId;
        }
}

const mapDispatchToProps = dispatch => ({
        getData: activeId => dispatch(CategoryActions.getData(activeId))
});

export default connect(null, mapDispatchToProps)(Category);