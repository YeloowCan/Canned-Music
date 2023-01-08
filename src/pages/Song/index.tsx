import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks'
// import { accountInfo } from '@/apis/account'

const Song: React.FC = () => {
  const { isLogined, userInfo } = useAppSelector((store) => store.login)

  console.log(isLogined, userInfo)

  useEffect(() => {
    // accountInfo()
  }, [])

  return <div>Songdddd</div>
}

export default Song
