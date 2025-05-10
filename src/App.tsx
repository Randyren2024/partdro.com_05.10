import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import { Home, Package, BookOpen, Users, Phone, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import LanguageSelector from './components/LanguageSelector'
import { trackPageView } from './utils/analytics'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="bg-white border-b px-8">
          <div className="max-w-[1400px] mx-auto flex items-center h-full gap-12">
            <Link to="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap tracking-tight font-sans">
              HydroDrone
            </Link>
            <div className="flex items-center justify-between flex-1 gap-8">
              <NavigationMenu />
              <LanguageSelector />
            </div>
          </div>
        </Header>

        <Content className="container mx-auto py-8 px-4">
          <RouteTracker />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </Content>

        <Footer className="text-center bg-gray-100">
          <div className="container mx-auto">
            ©{new Date().getFullYear()} HydroDrone. All rights reserved.
          </div>
        </Footer>
      </Layout>
    </Router>
  )
}

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function NavigationMenu() {
  const location = useLocation()
  const { t } = useTranslation()
  
  const items = [
    { key: '/', icon: <Home size={16} />, label: <Link to="/">{t('nav.home')}</Link> },
    { key: '/products', icon: <Package size={16} />, label: <Link to="/products">{t('nav.products')}</Link> },
    { key: '/blog', icon: <BookOpen size={16} />, label: <Link to="/blog">{t('nav.blog')}</Link> },
    { key: '/about', icon: <Users size={16} />, label: <Link to="/about">{t('nav.about')}</Link> },
    { key: '/contact', icon: <Phone size={16} />, label: <Link to="/contact">{t('nav.contact')}</Link> },
    { key: '/admin', icon: <Settings size={16} />, label: <Link to="/admin">Admin</Link> },
  ]

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={items}
      className="border-none min-w-[600px] flex-1"
    />
  )
}

export default App