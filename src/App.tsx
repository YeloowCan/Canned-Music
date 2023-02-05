import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routers from './router'
import { MainLayout, RouterAuth } from './components'
import { ConfigProvider } from 'antd'
import { MainRed } from './constants/styles'
import './styles/global.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: MainRed
            }
          }}
        >
          <MainLayout>
            <RouterAuth routers={routers} />
          </MainLayout>
        </ConfigProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
