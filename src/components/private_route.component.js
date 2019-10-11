import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isAuth() {
        return (localStorage.getItem('token') !== null);
    };
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        let path = props.location.pathname;
        if(isAuth()===false){
            return(<Redirect to='/' />)
        }
        else{
            return( <Component {...path} /> )
        }
    }} />
)