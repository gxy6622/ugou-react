import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class Left extends React.Component {
        render() {
                const { list, activeId, toggleId } = this.props;
                return (
                        <>
                                {list.length > 0 && (
                                        <ul className={ style.list }>
                                                {list.map(item => (
                                                        <li key={ item.id } className={ item.id === activeId ? style.active : '' }
                                                            onClick={ () => toggleId(item.id) }>
                                                                <span>{ item.name }</span>
                                                        </li>
                                                ))}
                                        </ul>
                                )}
                        </>
                );
        }
}

//表达对所需数据预期要求
Left.propTypes = {
        list: PropTypes.array.isRequired,
        activeId: PropTypes.number.isRequired,
        toggleId: PropTypes.func.isRequired
};

export default Left;