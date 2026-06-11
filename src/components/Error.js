import React from 'react';
import {useRouteError, isRouteErrorResponse, Link} from 'react-router';

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='error'>
            <h1>Oops! Something went wrong.</h1>
            <p>We couldn't find the page you're looking for.</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorComponent;
