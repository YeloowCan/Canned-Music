import { FC, useEffect } from 'react'
import { useAppSelector } from '../../hooks'
// import { accountInfo } from '@/apis/account'

const Song: FC = () => {
  const { isLogined, userInfo } = useAppSelector((store) => store.login)

  console.log(isLogined, userInfo)

  useEffect(() => {
    // accountInfo()
  }, [])

  return <div>Song</div>
}

export default Song
