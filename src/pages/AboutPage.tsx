import React from 'react'
import { Typography, Card, Avatar } from 'antd'
import { Award, Users, Target } from 'lucide-react'

const { Title, Paragraph } = Typography

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',
    bio: 'Over 15 years of experience in technology leadership'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
    bio: 'Expert in cloud architecture and emerging technologies'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
    bio: 'Passionate about creating beautiful, user-friendly interfaces'
  }
]

function AboutPage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <Title level={1}>About Us</Title>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're a team of passionate individuals dedicated to creating innovative solutions
          for businesses worldwide.
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Our Mission</Title>
          <Paragraph>
            To empower businesses with cutting-edge technology solutions that drive growth
            and success.
          </Paragraph>
        </Card>

        <Card className="text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Our Values</Title>
          <Paragraph>
            Innovation, integrity, and customer success are at the heart of everything we do.
          </Paragraph>
        </Card>

        <Card className="text-center">
          <Target className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Our Vision</Title>
          <Paragraph>
            To be the leading provider of transformative digital solutions globally.
          </Paragraph>
        </Card>
      </div>

      <div className="space-y-8">
        <Title level={2} className="text-center">Our Team</Title>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map(member => (
            <Card key={member.name} className="text-center">
              <Avatar
                src={member.image}
                size={120}
                className="mb-4"
              />
              <Title level={4}>{member.name}</Title>
              <Paragraph className="text-blue-500 font-medium">{member.role}</Paragraph>
              <Paragraph>{member.bio}</Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage