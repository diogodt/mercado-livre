import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import SearchResultItem from './SearchResultItem';

const SearchResult: React.FC = () => {
    const searchResults = useSelector((state: RootState) => state.search.results);

    return (
        <div>
            {searchResults.map(item => (
                <SearchResultItem key={item.id} product={item} />
            ))}
        </div>
    );
}

export default SearchResult;