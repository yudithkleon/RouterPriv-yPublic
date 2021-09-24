import React, {useReducer} from 'react';
import { authReducer, initialState} from '../reducers/authReducer';
import { login, logout } from '../actions/authAction';
import AppRouter from '../routers/AppRouter';

export const Login = () => {

const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <div>
            <h1>Login</h1>
            <hr />
            <p>{state.name}</p>
            <p>{state.uid}</p>
            <button 
                className="btn btn-dark" 
                onClick={()=>dispatch(login('1234', 'Yudith leon'))
                }
            >
                Login
            </button>
            <button 
                className="btn btn-dark m-2" 
                onClick={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}
