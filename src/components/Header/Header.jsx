import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black pt-5 text-white">
                <div className="md:flex-1 ml-10">
                    <img className='md:w-[350px] sm:w-[200px]' src={logo} alt='logo' />
                </div>
                <div className="flex-none gap-2 mr-5">
                    <div className="md:flex justify-center">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="md:navbar-end">
                                <button to='/login' className="btn btn-warning">Login</button>
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;