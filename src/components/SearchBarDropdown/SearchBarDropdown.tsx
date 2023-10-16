import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

import searchIcon from '../../assets/images/ic_Search@2x.png.png';
import './SearchBarDropDown.scss'; 

export type Product = {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    currency_id: string;
    address: {
        state_name: string;
    };
    shipping: {
        free_shipping: boolean;
    }
};

const SearchBarDropdown: React.FC<{ query: string; onSelect: (selectedProduct: Product) => void }> = ({ query, onSelect }) => {
    const products: Product[] = useSelector((state: RootState) => state.search.results);

    return (
        <div className="dropdown">
            {products.length === 0 ? (
                <div className="dropdown-item">No results found</div>
            ) : (
                products.map(product => (
                    <div key={product.id} className="dropdown-item" onClick={() => onSelect(product)}>
                        <img src={searchIcon} alt={product.title} />
                        <span>{product.title}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchBarDropdown;