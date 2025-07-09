import React from 'react';
import { Link } from 'react-router-dom';
import policies from "../assets/data/policies";



const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {policy.img && (
              <img
                src={policy.img}
                alt={policy.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{policy.name}</h2>
              <p className="text-sm text-gray-600">{policy.description}</p>
              <Link
                to={`/products/${policy.id}`}
                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
