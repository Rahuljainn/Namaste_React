import {Link} from 'react-router-dom';
import {APPLOGO} from '../utils/constants';
import {useState} from 'react';

const Header = () => {
    console.log('Header rendered');
    const [isLoggedIn, setIsLoggedIn] = useState('Login');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={APPLOGO} alt='logo' />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Cart</li>

                    <button
                        className='login-btn'
                        onClick={() =>
                            setIsLoggedIn(
                                isLoggedIn === 'Login' ? 'Logout' : 'Login',
                            )
                        }
                    >
                        {isLoggedIn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
