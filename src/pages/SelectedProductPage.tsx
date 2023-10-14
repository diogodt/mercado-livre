import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../redux/thunks/productThunks'; 
import { RootState } from '../redux/store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import SelectedProductContent from '../components/SelectedProductContent';
import ActionBuyItem from '../components/ActionBuyItem';
import Breadcrumbs from '../components/Breadcrumbs';

import '../assets/styles/SelectedProductPage.scss';

const SelectedProductPage: React.FC = () => {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const { id } = useParams<{ id: string }>();
    const product = useSelector((state: RootState) => state.product);
    const actionBuyItemRef = useRef<HTMLDivElement | null>(null);
    const actionBuyItemPosition = actionBuyItemRef.current ? actionBuyItemRef.current.getBoundingClientRect() : null;


    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (product.details.title) {
            document.title = product.details.title + "| Mercado Libre";
        } else {
            document.title = "Mercado Libre";
        }
    }, [product.details.title]);
    

    return (
        <>
            <Breadcrumbs />
            <div className='pageWrapper'>
                <div className='mainContent'>
                    <div className="selected-product-page">
                        <div className="top-row">
                            <div className="selected-product-content-wrapper">
                                <SelectedProductContent 
                                    image={product.details}
                                    actionBuyItemPosition={actionBuyItemPosition}
                                />
                            </div>
                            <div className="action-buy-item-wrapper">
                                <ActionBuyItem 
                                    condition={product.condition}
                                    sold_quantity={product.details.sold_quantity}
                                    title={product.details.title}
                                    amount={product.price.amount}
                                    decimals={product.price.decimals}
                                    ref={actionBuyItemRef}
                                />
                            </div>
                        </div>
                        <h1>Descripción del producto</h1>
                        <div className="description-row">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectedProductPage;