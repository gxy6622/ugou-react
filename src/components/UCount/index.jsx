import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class UCount extends React.PureComponent {
        constructor(props) {
                super(props);
                this.state = { loading: false };
                this.decrease = this.decrease.bind(this);
                this.increase = this.increase.bind(this);
        }
        render() {
                let { count } = this.props;
                return (
                        <div className={ style["num-count"] }>
                                <span className={ style.decrease } onClick={ this.decrease }></span>
                                <span>{ count }</span>
                                <span className={ style.increase } onClick={ this.increase }></span>
                        </div>
                );
        }
        decrease() {
                if(this.props.count > 1) {
                        if(!this.state.loading) {
                                this.setState({ loading: true });
                                this.props.decrease().then(() => this.setState({ loading: false }));
                        }
                }
        }
        increase() {
                if(this.props.count < 5) {
                        if(!this.state.loading) {
                                this.setState({ loading: true });
                                this.props.increase().then(() => this.setState({ loading: false }));
                        }
                }
                else alert('已到达购买上限...');
        }
}

UCount.propTypes = {
        count: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired
};
export default UCount;