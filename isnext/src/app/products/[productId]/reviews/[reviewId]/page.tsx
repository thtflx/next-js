import { notFound } from 'next/navigation';
import React from 'react'

interface TProps {
    params: {
        reviewId: string;
        productId: string;
    };
}

const ReviewDetails: React.FC<TProps> = ({ params }) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return (
        <h1>Details about review {params.reviewId} and about product {params.productId}</h1>
    )
}

export default ReviewDetails