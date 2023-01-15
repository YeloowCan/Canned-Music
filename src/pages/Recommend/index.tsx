import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks'
import Banner from './Banner'

const Recommend: React.FC = () => {
  const { isLogined, userInfo } = useAppSelector((store) => store.login)

  return (
    <div>
      <Banner />
    </div>
  )
}

export default Recommend
