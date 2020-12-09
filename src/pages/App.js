import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuDrawer from "../components/layouts/drawer/MenuDrawer";
import Header from "../components/layouts/header/Header";
import Loading from "../components/common/loading/Loading";
import withToken from "../components/higher-order-component/withToken";

const TheContent = React.lazy(() => import('../components/layouts/contents/TheContent'));

const App = () => {
    return (
        <Router>
            <Header/>
            <MenuDrawer/>
            <React.Suspense fallback={<Loading/>}>
                <Switch>
                    <Route path="/" name="home-page" render={() => <TheContent/>}/>
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default withToken(App);
