import {APPLOGO} from '../utils/constants';
import {useState} from 'react';
import Search from './Search.js';
import {Link} from 'react-router';

const Header = ({searchText, setSearchText}) => {
    const [isLoggedIn, setIsLoggedIn] = useState('Login');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={APPLOGO} alt='logo' />
            </div>

            <div className='nav-items'>
                <ul>
                    {
                        <Search
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />
                    }
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
