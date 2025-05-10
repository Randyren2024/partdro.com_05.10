import { types } from 'react-bricks/frontend'
import { website } from 'react-bricks-ui'
import { Link } from 'react-router-dom'

const config: types.ReactBricksConfig = {
  appId: '2d5c5c1c-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  apiKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
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
  renderLocalLink: ({ href, children, className }) => {
    return <Link to={href} className={className}>{children}</Link>
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