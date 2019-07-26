import React from 'react';
import style from './presentation.module.scss';
import Header from '../Header/presentation.jsx';
import List from '../List';
import Footer from '../Footer';

class Presentation extends React.Component {
        render() {
                return (
                        <div className={ `page-wrapper ${ style["cart-wrapper"] }` }>
                                <div className={ style["header-wrapper"] }>
                                        <Header />
                                </div>
                                <div className={ style["content-wrapper"] }>
                                        <List />
                                </div>
                                <div className={ style["footer-wrapper"] }>
                                        <Footer />
                                </div>
                        </div>
                );
        }
}

export default Presentation;