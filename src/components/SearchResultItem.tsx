import React from 'react';

type ProductProps = {
    id: string;
    thumbnail: string;
    title: string;
    currency_id: string;
    price: number;
    address: {
        state_name: string;
    };
    shipping: {
        free_shipping: boolean;
    };
};

type SearchResultItemProps = {
    product: ProductProps;
};

const SearchResultItem: React.FC<SearchResultItemProps> = ({ product }) => {
    return (
        <div>
            <img src={product.thumbnail} alt={product.title} />
            <div>
                {product.currency_id} {product.price}
                {product.shipping.free_shipping && <span>Free Shipping</span>}
            </div>
            <div>{product.address.state_name}</div>
            <div>{product.title}</div>
        </div>
    );
}

export default SearchResultItem;