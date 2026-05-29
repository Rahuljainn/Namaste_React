import resData from '../../src/utils/mockData.js';
import RestaurantCard from './RestaurantCard.js';

const Body = () => {
    return (
        <div className='body'>
            <div className='discovery-text'>
                Discover best restaurants on Dineout
            </div>
            <div className='restraurant-container'>
                {resData.map((item) => (
                    <RestaurantCard key={item.info.id} resData={item} />
                ))}
            </div>
        </div>
    );
};

export default Body;
