import React from 'react'

interface TProps {
    params: {
        productId: string;
    };
}

const ProductDetails: React.FC<TProps> = ({ params }) => {
    return (
        <h1>Details about product {params.productId}</h1>
    )
}

export default ProductDetails