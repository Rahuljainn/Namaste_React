import {CDN_URL, RATING_STAR} from '../utils/constants';

const RestaurantCard = ({resd}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        aggregatedDiscountInfoV3,
        areaName,
    } = resd.info;

    return (
        <div>
            <div className='card'>
                <div className='restraurant-card'>
                    <div className='image-container'>
                        <img
                            className='restraurant-image'
                            src={CDN_URL + cloudinaryImageId}
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
                            src={RATING_STAR}
                        />
                        <span className='rating-text'>
                            {avgRatingString} • {sla?.deliveryTime} mins
                        </span>
                    </div>
                    <h4>{cuisines?.join(', ')}</h4>
                    <h4>{areaName}</h4>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
