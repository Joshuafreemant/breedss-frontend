import React,{useEffect,useReducer,useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { setLogin } from '../store/index';
import HorizontalAds from '../Components/HorizontalAds';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const dispatchs = useDispatch()

    const [state, dispatch] = useReducer((state, action) => ({ ...state, ...action }),
    { email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', state.email);
        formData.append('password', state.password);

        let object = {};
        formData.forEach((value, key) => (object[key] = value));
        let json = JSON.stringify(object);


        const savedUser = await fetch(process.env.REACT_APP_BASE_URL +'auth/login', {
            method: 'POST',
            mode:'cors',
            body: json,
            headers: {
                'Content-Type': 'application/json',
               'Access-Control-Allow-Origin' : '*',

            }

        })
        const loggedIn = await savedUser.json();
       
        if(loggedIn.token){
            dispatchs(setLogin({
                user:loggedIn.user,
                token:loggedIn.token
            }))
            navigate('/')
        }
       
        else{
            
            let notify = () => {
                toast.error((loggedIn.msg), {
                  toastClassName: 'error'
                })
              };
              notify()
        }
    }
    
    return (
        <div className='login-body'>
      <ToastContainer />
           


            <form action="" className="mt-40 mb-40 form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-groups">
                    <label htmlFor="Email"></label>
                    <input
                        type="email"
                        className="form-input"
                        Placeholder="Email Address"
                        value={state.email}
                        onChange={(e) => dispatch({ email: e.target.value })}
                    />
                </div>

                <div className="form-groups">
                    <label htmlFor="Password"></label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Password"
                        value={state.password}
                        onChange={(e) => dispatch({ password: e.target.value })}
                    />
                </div>

                
                <div className="form-groups">

                    <button className='form-button' type='submit'>Log In</button>
                
                </div>
                <div className='links'>
                    <Link exact to="/forgot" className="login__in-link">
                        Forgot Password?
                    </Link>

                    <Link exact to="/create-account" className="login__in-link">
                        Sign Up
                    </Link>
                </div>


            </form>
            <div className="">
            <HorizontalAds/>

            </div>

        </div>
    )
}

export default Login