import { connect } from 'react-redux';         //访问仓库一定要用connect方法
import Left from '../presentation/Left';

const mapStateToProps = ({ category: { list } }, props) => ({ //props表示接收的和要传下去的activeId和toggleId
        ...props,
        list: list.filter(item => item.fid === 0)
});

export default connect(mapStateToProps, null)(Left);