import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { autocompleteSearch } from '../redux/thunks/searchThunks';
import SearchBarDropdown from './SearchBarDropdown';
import { Product } from './SearchBarDropdown'
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'redux/store/store';
import { AnyAction } from 'redux';

import logo from '../assets/images/Logo_ML.png';
import searchIcon from '../assets/images/ic_Search.png';


import '../assets/styles/SearchBar.scss'; 

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        if (query.length >= 2) {
            setShowDropdown(true);
            dispatch(autocompleteSearch(query));
        } else {
            setShowDropdown(false);
        }
    }, [query, dispatch]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowDropdown(false);
        history(`/items?search=${query}`);
    };

    const handleSelectProduct = (selectedProduct: Product) => {
        setShowDropdown(false);
        history(`/items?search=${selectedProduct.title}`);
    };

    const handleLogoClick = () => {
        setQuery('');
        history('/');
    }
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const formElement = document.querySelector('form');
            const dropdownElement = document.querySelector('.dropdown');
            if (formElement && !formElement.contains(event.target as Node) && 
            (!dropdownElement || !dropdownElement.contains(event.target as Node))) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);    

    return (
        <div className='searchBar col-12'>
            <div className='searchWrapper'>
                <div className='logo col-1'>
                    <img src={logo} alt="Mercado Libre" onClick={handleLogoClick}/>
                </div>
                <form onSubmit={handleSubmit} className='searchForm col-11'>
                    <input
                        value={query}
                        className='searchInput'
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Nunca dejes de buscar"
                    />
                    <button type="submit" className="searchIcon"><img src={searchIcon} alt="Search"/></button>
                    {showDropdown && <SearchBarDropdown query={query} onSelect={handleSelectProduct} />}
                </form>
            </div>
        </div>
    );
}

export default SearchBar;