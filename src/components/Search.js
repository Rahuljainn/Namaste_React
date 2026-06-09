// import {useState} from 'react';

const Search = ({searchText, setSearchText}) => {
    // const [searchInput, setSearchInput] = useState(searchText);

    return (
        <div>
            <input
                type='text'
                className='search-input'
                placeholder='Search for restaurants, cuisines or a dish...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} //setSearchInput(e.target.value)
            />
            <button
                type='button'
                className='search-btn'
                // onClick={() => setSearchText(searchInput)}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
