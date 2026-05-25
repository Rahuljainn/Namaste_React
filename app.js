import React from 'react';
import ReactDOM from 'react-dom/client';

const appLogo = new URL('./public/appLogo.jpg', import.meta.url).href;
const res1 = new URL('./public/burger.jpg', import.meta.url).href;

/*
header
    logo
    Nav items
body
    searchBar
    RestraurantContainer
        restraurantCard
            img
            name of rest, rating, cusine, delivery time
footer
    vopyright
    links
    address
    contact
*/

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={appLogo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestraurantCard = () => {
    return (
        <div className='restraurant-card'>
            <img className='restraurant-image' src={res1} alt='restraurant' />
            <h3 className='restraurant-name'> Burger King 🍔</h3>
            <h4 className='restraurant-cuisine'> American, Fast Food </h4>
            <h4 className='restraurant-rating'> 4.5 ⭐ </h4>
            <h4 className='restraurant-delivery-time'> 30 mins </h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar'>search</div>
            <div className='restraurant-container'>
                {/* restraurant card */}
                <RestraurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
