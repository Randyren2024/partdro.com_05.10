import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { getProductsByCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'drone' | 'hydrogen' | 'parts'>('drone');

  const drones = getProductsByCategory('drone');
  const hydrogenProducts = getProductsByCategory('hydrogen');
  const parts = getProductsByCategory('parts');

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title={t('products.title')} description={t('products.subtitle')} />
      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{t('products.title')}</h1>
        <p className="text-gray-600">{t('products.subtitle')}</p>
      </div>
      
      {/* 类别选择器 */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeCategory === 'drone' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('drone')}
          >
            {t('products.categories.drones')}
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeCategory === 'hydrogen' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('hydrogen')}
          >
            {t('products.categories.hydrogen')}
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeCategory === 'parts' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('parts')}
          >
            {t('products.categories.parts')}
          </button>
        </div>
      </div>
      
      {/* 产品展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCategory === 'drone' && drones.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <a 
                href={`#product-${product.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {t('products.view_details')}
              </a>
            </div>
          </div>
        ))}
        
        {activeCategory === 'hydrogen' && hydrogenProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <a 
                href={`#product-${product.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {t('products.view_details')}
              </a>
            </div>
          </div>
        ))}
        
        {activeCategory === 'parts' && parts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <a 
                href={`#product-${product.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {t('products.view_details')}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* 应用场景部分 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t('scenes.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">{t('scenes.logistics.title')}</h3>
            <p>{t('scenes.logistics.description')}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">{t('scenes.agriculture.title')}</h3>
            <p>{t('scenes.agriculture.description')}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">{t('scenes.emergency.title')}</h3>
            <p>{t('scenes.emergency.description')}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">{t('scenes.inspection.title')}</h3>
            <p>{t('scenes.inspection.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;