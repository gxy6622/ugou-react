import React from 'react';
import Cookies from 'js-cookie';
import EmptyCart from './EmptyCart/presentation.jsx';
import Wrapper from './Wrapper';

class Cart extends React.Component {
        render() {
                return (
                        <>
                                {Cookies.get('user') ? (
                                        <Wrapper />
                                ) : (
                                        <EmptyCart />
                                )}
                        </>
                );
        }
}

export default Cart;