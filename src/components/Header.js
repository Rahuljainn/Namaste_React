import {APPLOGO} from '../utils/constants';
import {useState} from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('Login');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={APPLOGO} alt='logo' />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
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
