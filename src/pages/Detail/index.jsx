import React from 'react';
import Wrapper from './Wrapper';

class Detail extends React.Component {
        render() {
                let pid  = parseInt(this.props.match.params.pid);
                return (
                        <>
                                <Wrapper pid={ pid } />
                        </>
                );
        }
}

export default Detail;