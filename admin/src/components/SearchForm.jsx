import React, { useState } from 'react';
import { useSearch } from '../context/SearchProvider';

const SearchForm = () => {

    const [query, setQuery] = useState('');
    const { handleSearch, resetSearch } = useSearch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            return;
        }
        handleSearch(query);
    };

    const handleReset = (e) => {
        if(e.key === 'Escape'){
            resetSearch();
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={query}
            onKeyDown={handleReset}
                onChange={({ target }) => setQuery(target.value)}
                placeholder='Search...'
                className='border border-gray-500 outline-none rounded p-1 focus:ring-1 ring-blue-500 w-56' />
        </form>
    );
}

export default SearchForm;
