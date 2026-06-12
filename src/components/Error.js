import React from 'react';
import {useRouteError, isRouteErrorResponse, Link} from 'react-router-dom';

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='error'>
            <h1>Oops! Something went wrong.</h1>
            <p>Status: {error.status}</p>
            <p>Message: {error.message}</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorComponent;
