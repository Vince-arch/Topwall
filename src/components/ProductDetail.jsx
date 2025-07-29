import React from 'react';
import { useParams, Link } from 'react-router-dom';
import policies from '../ProductDetail.json';

const ProductDetail = () => {
    const { id } = useParams();
    const policy = policies.find((p) => p.id === Number(id));

    if (!policy) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Policy not found</h2>
                <Link to="/products" className="text-blue-600 hover:underline">
                    Back to Policies
                </Link>
            </div>
        );
    }

    // Dynamically resolve image path
    let imageSrc;
    try {
        imageSrc = new URL(`../assets/policies/${policy.img}.jpg`, import.meta.url).href;
    } catch {
        imageSrc = null; // fallback if image doesn't exist
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{policy.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {imageSrc && (
                    <img
                        src={imageSrc}
                        alt={policy.name}
                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                    />
                )}
                <div>
                    <p className="text-gray-700 text-lg">{policy.description}</p>
                </div>
            </div>

            <Link to="/products" className="inline-block mt-8 text-blue-600 hover:underline">
                ← Back to Policies
            </Link>
        </div>
    );
};

export default ProductDetail;
