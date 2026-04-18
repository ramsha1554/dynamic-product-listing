import React from 'react';
import { formatCurrency, truncateText } from '../utils/formatters';

const ProductCard = ({ product }) => {
  const { title, price, description, category, image } = product;

  return (
    <div className="card-premium h-full flex flex-col group animate-slide-up">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title} 
          className="product-image"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm text-xs font-bold text-primary-600 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2 truncate group-hover:text-primary-600 transition-colors" title={title}>
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {truncateText(description, 100)}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-black text-slate-900">
            {formatCurrency(price)}
          </span>
          <button className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-primary-600 transition-all active:scale-90 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
