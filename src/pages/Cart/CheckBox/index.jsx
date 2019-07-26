import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
        render() {
                let { checked, toggle } = this.props;
                return (
                        <span className={ [ style.checkbox, checked ? style.checked : '' ].join(" ") } onClick={ toggle }></span>
                );
        }
}

CheckBox.propTypes = {
        checked: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired
};
export default CheckBox;