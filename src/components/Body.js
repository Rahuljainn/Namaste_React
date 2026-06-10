import {SWIGGY_API_URL} from '../utils/constants.js';
import RestaurantCard from './RestaurantCard.js';
import shimmer from './Shimmer.JS';
import Search from './Search.js';

import {useState, useEffect} from 'react';

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allFetchedRestaurants, setAllFetchedRestaurants] = useState([]);

    const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

    const [isTopRatedFilterEnabled, setIsTopRatedFilterEnabled] =
        useState(false);

    useEffect(() => {
        fetchRestaurantDataFromSwiggy();
    }, []);

    const fetchRestaurantDataFromSwiggy = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);

            const jsonResponse = await response.json();

            const fetchedRestaurants =
                jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle
                    .restaurants;

            setAllFetchedRestaurants(fetchedRestaurants);

            setDisplayedRestaurants(fetchedRestaurants);
        } catch (error) {
            console.error('Error fetching Swiggy data:', error);
        }
    };

    const toggleTopRatedRestaurantsFilter = () => {
        if (isTopRatedFilterEnabled) {
            setDisplayedRestaurants(allFetchedRestaurants);
        } else {
            const topRatedRestaurants = allFetchedRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2,
            );

            setDisplayedRestaurants(topRatedRestaurants);
        }

        setIsTopRatedFilterEnabled(!isTopRatedFilterEnabled);
    };

    const searchFilteredRestaurants = displayedRestaurants.filter(
        (restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
    );

    return displayedRestaurants.length === 0 ? (
        shimmer()
    ) : (
        <div className='body'>
            <div className='search-container'>
                <Search searchText={searchText} setSearchText={setSearchText} />
            </div>

            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={toggleTopRatedRestaurantsFilter}
                >
                    {isTopRatedFilterEnabled
                        ? 'Show All Restaurants'
                        : 'Top Rated Restaurants'}
                </button>
            </div>

            <div className='discovery-text'>
                Discover best restaurants on Dineout
            </div>

            <div className='restraurant-container'>
                {searchFilteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resd={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
