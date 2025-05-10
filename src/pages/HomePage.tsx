import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Card } from 'antd'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { getAllProducts } from '../data/products'

const { Title, Paragraph } = Typography

function HomePage() {
  const { t } = useTranslation()
  const featuredProducts = getAllProducts().slice(0, 3) // 首页只展示前3个产品

  return (
    <div>
      <SEO
        title={t('app.name')}
        description={t('app.description')}
      />
      
      {/* 英雄板块 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.hero.title')}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('home.hero.subtitle')}</p>
          <Link to="/products" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            {t('nav.products')}
          </Link>
        </div>
      </section>
      
      {/* 特性部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t('home.features.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.features.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.feature1.title')}</h3>
              <p className="text-gray-600">{t('home.features.feature1.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.feature2.title')}</h3>
              <p className="text-gray-600">{t('home.features.feature2.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.feature3.title')}</h3>
              <p className="text-gray-600">{t('home.features.feature3.description')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 精选产品 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t('products.title')}</h2>
            <p className="text-gray-600">{t('products.subtitle')}</p>
      </div>

        <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={t(product.nameKey)} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{t(product.nameKey)}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{t(product.descriptionKey)}</p>
                  <Link 
                    to={`/products`} 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    {t('products.view_details')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/products" 
              className="inline-block border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              {t('nav.products')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* 应用场景 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t('scenes.title')}</h2>
            <p className="text-gray-600">{t('scenes.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('scenes.logistics.title')}</h3>
                <p className="text-gray-600">{t('scenes.logistics.description')}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('scenes.agriculture.title')}</h3>
                <p className="text-gray-600">{t('scenes.agriculture.description')}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('scenes.emergency.title')}</h3>
                <p className="text-gray-600">{t('scenes.emergency.description')}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('scenes.inspection.title')}</h3>
                <p className="text-gray-600">{t('scenes.inspection.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA部分 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
      </div>
  )
}

export default HomePage