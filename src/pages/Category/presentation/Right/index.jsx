import React from 'react'
import style from './index.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Right extends React.Component{
        render(){
                let { list, activeId } = this.props;
                return (
                        <>
                                {list.length > 0 ? (
                                        <ul className={ style.list }>
                                                {list.map(item => (
                                                        <li key={ item.id }>
                                                                <Link to={ `/list/${ activeId }/${ item.id }` }>
                                                                        <img src={ item.avatar } alt=""/>
                                                                        <span>{ item.name }</span>
                                                                </Link>
                                                        </li>
                                                ))}
                                        </ul>
                                ) : (
                                        <p>当前分类暂无二级分类，敬请期待...</p>
                                )}
                        </>
                );
        }
}

Right.propTypes = {
        list: PropTypes.array.isRequired,
        avatar: PropTypes.string.isRequired,
        activeId: PropTypes.number.isRequired
};

export default Right;