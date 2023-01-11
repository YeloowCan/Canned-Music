import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routers from './router'
import { MainLayout, RouterAuth } from './components'
import 'antd/dist/reset.css'
import './styles/global.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <MainLayout>
          <RouterAuth routers={routers} />
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
