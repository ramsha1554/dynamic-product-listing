import React from 'react';
import { formatCurrency, truncateText } from '../utils/formatters';

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

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
        {rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-amber-50/90 backdrop-blur-sm shadow-sm rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold text-amber-900">{rating.rate}</span>
            <span className="text-[10px] text-amber-600 font-medium">({rating.count})</span>
          </div>
        )}
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
