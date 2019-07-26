import React from 'react';
import style from './presentation.module.scss';
import Header from '../Header/presentation.jsx';

class Presentation extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        
                };
        }
        render() {
                return (
                        <div className={ style["empty-cart"] }>
                                <Header />
                                <div className={ style.content }>
                                        <img src={ require("./car.png") } alt=""/>
                                        <p>购物车是空的</p>
                                </div>
                        </div>
                );
        }
}

export default Presentation;