import React, {useState} from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Counter from '../components/Counter';
import Navbar from '../components/Navbar';
import AuthRouters from './AuthRouters';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';


const AppRouter = () => {

    const [isAuth, setIsAuth] = useState(true)

    return (
        <Router>
            <div>
             
                <div className="container">
                    <Switch>
                        <PublicRouters path="/auth"
                         component={AuthRouters}
                        isAuthenticated={isAuth}
                       />

                        <PrivateRouters path="/"
                         component={Counter}
                        isAuthenticated={isAuth}/>

                        <Redirect to="/auth/login" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
