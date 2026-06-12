import React from 'react';
import {useEffect} from 'react';
const URL =
    'https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.720542&lng=75.8419112&restaurantId=581971&catalog_qa=undefined&submitAction=ENTER';
const RestaurentMenu = () => {
    useEffect(() => {
        FetchRestaurentMenuData();
        console.log('RestaurentMenu component mounted');
    }, []);

    const FetchRestaurentMenuData = async () => {
        try {
            const response = await fetch(URL);
            // if (!response.length) {
            //     console.log('No menu data found for the restaurant');
            //     return;
            // }
            // const jsonResponse = await response?.json();
            console.log(response);
        } catch (error) {
            console.error('Error fetching restaurent menu data:', error);
        }
    };

    return (
        <div>
            <h1>Restaurent Menu</h1>
            <h2>Menu Items</h2>
        </div>
    );
};

export default RestaurentMenu;
