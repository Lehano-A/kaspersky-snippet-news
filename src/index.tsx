import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import './scss/index.scss'
import '@ant-design/v5-patch-for-react-19'
import App from './components/App/App'
import themeAntd from './themeAntd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={themeAntd}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
