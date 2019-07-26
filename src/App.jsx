import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotAliveRoute from 'react-live-route';
import Pages from './pages';

const LiveRoute = withRouter(NotAliveRoute);
class App extends React.Component {
        render() {
                return (
                        <>
                                <Switch>
                                        <Route path="/" component={ Pages.Home } exact />
                                        <Route path="/category" />
                                        <Route path="/list/:mId/:sId" />
                                        <Route path="/detail/:pid" component={ Pages.Detail } />
                                        <Route path="/discover" component={ Pages.Discover } />
                                        <Route path="/cart" component={ Pages.Cart } />
                                        <Route path="/profile" component={ Pages.Profile } />
                                        <Route path="/login" component={ Pages.Login } />
                                        <Route path="/address" component={ Pages.Address } />
                                        <Route path="/order/:orderId" component={ Pages.Order } />
                                        <Route path="*" component={ Pages.NotFound } />
                                </Switch>
                                <LiveRoute path="/category" component={ Pages.Category } alwaysLive={ true } />
                                <LiveRoute path="/list/:mId/:sId" component={ Pages.List } alwaysLive={ true } />
                        </>

                );
        }
}

export default App;