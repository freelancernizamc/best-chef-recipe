import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = (event) => {
        event.preventDefault();
        logOut();
    };

    return (
        <div className="navbar bg-black pt-5 text-white">
            <div className="md:flex-1 ml-10">
                <img className='md:w-[300px] sm:w-[200px]' src={logo} alt='logo' />
            </div>
            <div className="flex-none gap-2 mr-5">
                <div className="md:flex justify-center items-center">
                    <ul className="menu menu-horizontal px-5">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {user && user.photoURL && <img src={user.photoURL} alt='user' />}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <div className="md:navbar-end">
                            {user ?
                                <button className='btn btn-warning' onClick={handleLogout}>LogOut</button> :
                                <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                            }
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
