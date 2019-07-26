import { connect } from 'react-redux';
import Right from '../presentation/Right';

const mapStateToProps = ({ category: { list } }, { activeId }) => {
        let target = list.find(item => item.id === activeId);
        return {
                activeId,
                list: list.filter(item => item.fid === activeId),
                avatar: target ? target.avatar : ''
        };
};


export default connect(mapStateToProps, null)(Right);