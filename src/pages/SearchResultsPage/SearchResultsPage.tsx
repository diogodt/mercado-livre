import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fullSearchAction } from '../../redux/thunks/searchThunks';
import { Product } from '../../components/SearchBarDropdown/SearchBarDropdown'
import { RootState } from '../../redux/store/store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import freeShipping from '../../assets/images/ic_shipping.png';

import './SearchResultsPage.scss'; 

const SearchResultsPage: React.FC = () => {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const location = useLocation();
    const products: Product[] = useSelector((state: RootState) => state.search.results);
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';

    useEffect(() => {
        if (query) {
            dispatch(fullSearchAction(query));
        }
    }, [query, dispatch]);

    useEffect(() => {
        if (query) {
            document.title = `${query} | Mercado Libre`;
        } else {
            document.title = "Mercado Libre";
        }
    }, [query]);
    

    return (
        <>
            <Breadcrumbs />
            <div className='pageWrapper'>
                <div className='mainContent'>
                    {products.map(product => (
                        <div key={product.id} className='productItem'>
                            <Link to={`/items/${product.id}`}>
                                <div className='image'>
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>
                                <div className='textInformation'>
                                    <div className="priceStateContainer">
                                        <span className="price">
                                            $ {product.price.toLocaleString('en-US')} 
                                            {product.shipping.free_shipping && <img src={freeShipping} alt="Free Shipping!"/>}
                                        </span>
                                        <span className="stateName">{product.address.state_name}</span>
                                    </div>
                                    <span className="title">{product.title}</span>
                                </div>                              
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SearchResultsPage;