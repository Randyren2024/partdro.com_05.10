import React from 'react'
import { Layout, Typography, Card, Button } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

function AdminPage() {
  const { t } = useTranslation()
  
  return (
    <div className="admin-page">
      <Title level={2}>管理后台</Title>
      <Paragraph>此页面为后台管理界面，目前功能正在开发中。</Paragraph>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card title="内容管理" className="shadow-md">
          <Paragraph>管理网站内容、产品信息和应用场景。</Paragraph>
          <Button type="primary" disabled>进入管理</Button>
        </Card>
        
        <Card title="用户管理" className="shadow-md">
          <Paragraph>管理用户账户和权限设置。</Paragraph>
          <Button type="primary" disabled>进入管理</Button>
        </Card>
        
        <Card title="系统设置" className="shadow-md">
          <Paragraph>配置网站基本设置和高级选项。</Paragraph>
          <Button type="primary" disabled>进入设置</Button>
        </Card>
        
        <Card title="统计分析" className="shadow-md">
          <Paragraph>查看网站访问统计和用户行为分析。</Paragraph>
          <Button type="primary" disabled>查看报告</Button>
        </Card>
      </div>
    </div>
  )
}

export default AdminPage