import React, {Suspense} from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import routes from '../../../routes';
import Loading from "../../common/loading/Loading";

const NotFound = React.lazy(() => import('../../../pages/not-found/NotFound'));

const TheContent = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            render={props => (
                                <React.Fragment>
                                    <route.component {...props} />
                                </React.Fragment>
                            )}/>
                    )
                })}
                <Redirect from="/" exact to="/my-assignment"/>
                <Route path='*' exact={true} component={NotFound}/>
            </Switch>
        </Suspense>
    )
};

export default React.memo(TheContent)
