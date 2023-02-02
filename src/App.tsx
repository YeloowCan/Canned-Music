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
        <MainLayout>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: MainRed
              }
            }}
          >
            <RouterAuth routers={routers} />
          </ConfigProvider>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
