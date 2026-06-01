import resData from '../../src/utils/mockData.js';
import RestaurantCard from './RestaurantCard.js';

import {useState} from 'react';

const Body = () => {
    let filterTopRatedRestaurants = () => {
        return resData.filter((item) => item.info.avgRating >= 4.0);
    };

    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

    return (
        <div className='body'>
            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={() =>
                        setListOfRestaurants(filterTopRatedRestaurants())
                    }
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='discovery-text'>
                Discover best restaurants on Dineout
            </div>
            <div className='restraurant-container'>
                {listOfRestaurants.map((item) => (
                    <RestaurantCard key={item.info.id} resd={item} />
                ))}
            </div>
        </div>
    );
};

export default Body;
