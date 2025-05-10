import React from 'react'
import { Typography, Card, Space, Tag } from 'antd'

const { Title, Paragraph } = Typography

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Technology',
    excerpt: 'Exploring upcoming trends in technology and their impact on business.',
    date: '2024-03-15',
    author: 'John Doe',
    tags: ['Technology', 'Future', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    title: 'Digital Transformation Success Stories',
    excerpt: 'Learn from companies that successfully underwent digital transformation.',
    date: '2024-03-10',
    author: 'Jane Smith',
    tags: ['Digital', 'Success', 'Business'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    excerpt: 'Essential security measures for modern businesses.',
    date: '2024-03-05',
    author: 'Mike Johnson',
    tags: ['Security', 'Cyber', 'Protection'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800'
  }
]

function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Title level={1}>Our Blog</Title>
        <Paragraph className="text-lg text-gray-600">
          Insights, updates, and stories from our team
        </Paragraph>
      </div>

      <div className="grid gap-8">
        {blogPosts.map(post => (
          <Card
            key={post.id}
            className="overflow-hidden"
          >
            <div className="md:flex gap-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-64 h-48 object-cover rounded"
              />
              <Space direction="vertical" className="flex-1">
                <div className="flex items-center gap-4 text-gray-500">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <Title level={3}>{post.title}</Title>
                <Paragraph>{post.excerpt}</Paragraph>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <Tag key={tag} color="blue">{tag}</Tag>
                  ))}
                </div>
              </Space>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BlogPage