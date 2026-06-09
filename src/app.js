import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

const AppLayout = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className='app'>
            <Header searchText={searchText} setSearchText={setSearchText} />

            <Body searchText={searchText} />

            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
