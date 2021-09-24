import React, { useReducer } from 'react'
import { couterReducer, initialState, init } from '../reducers/couterReducer';
import { types } from '../types/types';

const Counter = () => {

    const [state, dispatch] = useReducer(couterReducer, initialState, init)



    return (
        <div className="container mt-3">
            <h1>Counter: {state} </h1>
            <hr />

            <button
                className="btn btn-dark m-1"
                onClick={()=>
                    dispatch({type: types.increment})
                
                }
            >
                +1
            </button>
            
            <button
                className="btn btn-dark m-1"
                onClick={()=>
                    dispatch({type: types.decrement})
                
                }
            >
                -1
            </button>

            <button
                className="btn btn-dark m-1"
                onClick={()=>
                    dispatch({type: types.reset})
                
                }
            >
                Reset
            </button>
        </div>

    )
}

export default Counter
