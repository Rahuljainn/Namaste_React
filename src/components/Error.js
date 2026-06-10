import React from 'react';
import {useRouteError, isRouteErrorResponse} from 'react-router-dom';

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='error'>
            <img src={img} alt='error' />
            <h1>Oops! Something went wrong.</h1>
            <p>We couldn't find the page you're looking for.</p>
            {/* <Link to='/'>Go back to Home</Link> */}
        </div>
    );
};

export default ErrorComponent;
