import React from 'react';
import Presentation from './presentation.jsx';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.state = {};
        }
        render() {
                return (
                        <Presentation pid={ this.props.pid } />
                );
        }
}

export default Container;