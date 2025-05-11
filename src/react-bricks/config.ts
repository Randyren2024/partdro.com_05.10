import { types } from 'react-bricks/frontend'
import { website } from 'react-bricks-ui'

const config: types.ReactBricksConfig = {
  appId: 'caf9f8c8-4fea-454e-b9cf-7e3705cdb7a3',
  apiKey: '477add40-bf68-47cb-aa58-09b64a1f756d',
  pageTypes: [
    {
      name: 'page',
      pluralName: 'pages',
      defaultLocked: false,
      defaultStatus: types.PageStatus.Published,
      getDefaultContent: () => [],
    },
  ],
  bricks: [...website],
  logo: '/logo.svg',
  contentClassName: 'content',
  renderLocalLink: (props) => {
    const { href, children, className } = props
    return <a href={href} className={className}>{children}</a>
  },
  navigate: (path: string) => {
    window.location.href = path
  },
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
}

export default config