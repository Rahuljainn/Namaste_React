import {SWIGGY_API_URL} from '../utils/constants.js';
import RestaurantCard from './RestaurantCard.js';
import shimmer from './Shimmer.JS';

import {useState, useEffect} from 'react';

const Body = ({searchText}) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);
            const data = await response.json();

            const restaurants =
                data.data.cards[1].card.card.gridElements.infoWithStyle
                    .restaurants;

            setAllRestaurants(restaurants);
            setListOfRestaurants(restaurants);
        } catch (error) {
            console.error('Error fetching Swiggy data:', error);
        }
    };

    const toggleTopRatedFilter = () => {
        if (isFiltered) {
            setListOfRestaurants(allRestaurants);
        } else {
            const filteredRestaurants = allRestaurants.filter(
                (item) => item.info.avgRating > 4.2,
            );

            setListOfRestaurants(filteredRestaurants);
        }

        setIsFiltered(!isFiltered);
    };

    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    return listOfRestaurants.length === 0 ? (
        shimmer()
    ) : (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={toggleTopRatedFilter}>
                    {isFiltered
                        ? 'Show All Restaurants'
                        : 'Top Rated Restaurants'}
                </button>
            </div>

            <div className='discovery-text'>
                Discover best restaurants on Dineout
            </div>

            <div className='restraurant-container'>
                {filteredRestaurants.map((item) => (
                    <RestaurantCard key={item.info.id} resd={item} />
                ))}
            </div>
        </div>
    );
};

export default Body;
