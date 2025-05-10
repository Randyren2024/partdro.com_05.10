import React from 'react'
import { Typography, Card, Tag, Button } from 'antd'

const { Title, Paragraph } = Typography

const products = [
  {
    id: 1,
    name: 'Enterprise Solution',
    description: 'Complete business management system for large organizations',
    price: '$999/month',
    features: ['Cloud-based', 'Analytics', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    name: 'Business Suite',
    description: 'Perfect for growing businesses and medium-sized teams',
    price: '$499/month',
    features: ['Team Management', 'Reports', 'API Access'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    name: 'Starter Pack',
    description: 'Essential tools for small businesses and startups',
    price: '$199/month',
    features: ['Basic Features', 'Email Support', 'Updates'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
  }
]

function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Title level={1}>Our Products</Title>
        <Paragraph className="text-lg text-gray-600">
          Discover solutions tailored to your business needs
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            cover={
              <img
                alt={product.name}
                src={product.image}
                className="h-48 object-cover"
              />
            }
            className="h-full flex flex-col"
          >
            <Title level={4}>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {product.features.map(feature => (
                  <Tag key={feature} color="blue">{feature}</Tag>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{product.price}</span>
                <Button type="primary">Learn More</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage