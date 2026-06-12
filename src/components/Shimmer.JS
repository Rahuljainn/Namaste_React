const Shimmer = () => {
    return (
        <div className='shimmer-wrapper'>
            {Array(14)
                .fill('')
                .map((_, index) => (
                    <div className='shimmer-card' key={index}>
                        <div className='shimmer-image'></div>
                        <div className='shimmer-title'></div>
                        <div className='shimmer-rating'></div>
                        <div className='shimmer-text'></div>
                        <div className='shimmer-text short'></div>
                    </div>
                ))}
        </div>
    );
};

module.exports = Shimmer;
