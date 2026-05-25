import React from 'react';
import ReactDOM from 'react-dom/client';
import resData from './resData.js';

const appLogo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XJkLEIi2MGgOpToU2nZWzSgkTYj6io-LJdTwcFF-pw&s';
const ratingStar = new URL('./public/rating.png', import.meta.url).href;

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={appLogo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Other</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({resData}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        aggregatedDiscountInfoV3,
        areaName,
    } = resData.info;

    return (
        <div className='card'>
            <div className='restraurant-card'>
                <div className='image-container'>
                    <img
                        className='restraurant-image'
                        src={
                            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                            cloudinaryImageId
                        }
                        alt={name}
                    />
                    {/* Conditionally display the overlay shade only if an offer exists */}
                    {(aggregatedDiscountInfoV3?.header ||
                        aggregatedDiscountInfoV3?.subHeader) && (
                        <div className='image-overlay'>
                            <div className='offer'>
                                {aggregatedDiscountInfoV3?.header}{' '}
                                {aggregatedDiscountInfoV3?.subHeader}
                            </div>
                        </div>
                    )}
                </div>

                <h3>{name}</h3>

                {/* Moved rating and delivery text back outside the image container */}
                <div className='rating-container'>
                    <img
                        className='rating-star'
                        alt='rating-star'
                        src={ratingStar}
                    />
                    <span className='rating-text'>
                        {avgRatingString} • {sla?.deliveryTime} mins
                    </span>
                </div>
                <h4>{cuisines?.join(', ')}</h4>
                <h4>{areaName}</h4>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='restraurant-container'>
                {resData.map((item) => (
                    <RestaurantCard key={item.info.id} resData={item} />
                ))}
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
