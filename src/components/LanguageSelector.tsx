import React from 'react'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

const { Option } = Select

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' }
]

function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <Select
      defaultValue={i18n.language}
      onChange={handleChange}
      className="w-32"
    >
      {languages.map(lang => (
        <Option key={lang.code} value={lang.code}>
          {lang.name}
        </Option>
      ))}
    </Select>
  )
}

export default LanguageSelector