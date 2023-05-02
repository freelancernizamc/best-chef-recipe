import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Register = () => {






    return (
        <div className='w-50 mx-auto'>
            <Header />

            <h1 className="text-5xl font-bold text-center mt-10">Register Now!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name='photo' placeholder="Enter Your Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already Have an Account? Login!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                        <h2 className="text-center">OR</h2>
                        <hr />
                        <div className="flex ml-5 text-2xl">   <FaGoogle /> &emsp; <FaGithub /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;