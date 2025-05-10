import React from 'react'
import { Typography, Form, Input, Button, Card } from 'antd'
import { MapPin, Phone, Mail } from 'lucide-react'

const { Title, Paragraph } = Typography
const { TextArea } = Input

function ContactPage() {
  const onFinish = (values: any) => {
    console.log('Form submitted:', values)
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <Title level={1}>Contact Us</Title>
        <Paragraph className="text-lg text-gray-600">
          Get in touch with our team. We're here to help!
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Visit Us</Title>
          <Paragraph>
            123 Business Street<br />
            San Francisco, CA 94111<br />
            United States
          </Paragraph>
        </Card>

        <Card className="text-center">
          <Phone className="w-8 h-8 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Call Us</Title>
          <Paragraph>
            +1 (555) 123-4567<br />
            Monday to Friday<br />
            9:00 AM - 6:00 PM
          </Paragraph>
        </Card>

        <Card className="text-center">
          <Mail className="w-8 h-8 mx-auto mb-4 text-blue-500" />
          <Title level={4}>Email Us</Title>
          <Paragraph>
            info@company.com<br />
            support@company.com
          </Paragraph>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <Title level={3} className="text-center mb-8">Send us a Message</Title>
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea rows={4} size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage