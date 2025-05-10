import React from 'react'
import { Button, Typography, Card } from 'antd'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const { Title, Paragraph } = Typography

function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('home.welcome')}
        description={t('home.subtitle')}
        keywords="innovation, technology, digital solutions, business growth"
      />
      
      {/* Hero Section */}
      <div className="relative -mx-8 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        <div className="relative max-w-[1400px] mx-auto px-8 py-24">
          <div className="max-w-2xl text-white space-y-6">
            <Title level={1} className="!text-5xl !text-white !leading-tight m-0">
              {t('home.welcome')}
            </Title>
            <Paragraph className="text-xl text-gray-200 m-0">
              {t('home.subtitle')}
            </Paragraph>
            <Button type="primary" size="large" className="h-12 px-8 text-lg">
              {t('home.learnMore')}
            </Button>
          </div>
        </div>
        <img 
          src="https://1303876058.vod-qcloud.com/7db8808bvodcq1303876058/4b385e701397757910893402727/r0fs6Rm3XtoA.png"
          alt="HydroDrone Hero"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </div>

      <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            cover={
              <img
                alt={t('home.features.innovation.title')}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
                className="h-48 object-cover"
              />
            }
          >
            <Title level={4}>{t('home.features.innovation.title')}</Title>
            <Paragraph>
              {t('home.features.innovation.description')}
            </Paragraph>
          </Card>

          <Card
            cover={
              <img
                alt={t('home.features.quality.title')}
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800"
                className="h-48 object-cover"
              />
            }
          >
            <Title level={4}>{t('home.features.quality.title')}</Title>
            <Paragraph>
              {t('home.features.quality.description')}
            </Paragraph>
          </Card>

          <Card
            cover={
              <img
                alt={t('home.features.support.title')}
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800"
                className="h-48 object-cover"
              />
            }
          >
            <Title level={4}>{t('home.features.support.title')}</Title>
            <Paragraph>
              {t('home.features.support.description')}
            </Paragraph>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage