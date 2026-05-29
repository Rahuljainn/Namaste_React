const CDN_URL =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const APPLOGO =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XJkLEIi2MGgOpToU2nZWzSgkTYj6io-LJdTwcFF-pw&s';

const RATING_STAR = new URL('../../public/rating.png', import.meta.url).href;

module.exports = {
    CDN_URL,
    APPLOGO,
    RATING_STAR,
};
