// import React from 'react';

import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from "../../../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Header></Header>

            <h1 className="text-5xl font-bold text-center mt-10">Please Login!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">                        <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">Have not any Account? Register Now!</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Login</button>
                    </div>
                    <h2 className="text-center">OR</h2>
                    <hr />
                    <div className="flex ml-5 text-2xl cursor-pointer">   <FaGoogle onClick={handleGoogleSignIn} /> &emsp; <FaGithub /></div>
                </div>
                </div>
            </div>
        </div>

    );
};

export default Login;