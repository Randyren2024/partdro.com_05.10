import React from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from '../data/products';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={t(product.nameKey)} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {t(product.nameKey)}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {t(product.descriptionKey)}
        </p>
        <Link 
          to={`/products/${product.id}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {t('products.view_details')}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 