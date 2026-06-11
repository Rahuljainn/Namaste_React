import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router';

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import ErrorComponent from './components/Error.js';

const AppLayout = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className='app'>
            <Header searchText={searchText} setSearchText={setSearchText} />

            <Outlet context={{searchText, setSearchText}} />

            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
        errorElement: <ErrorComponent />,
    },
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
