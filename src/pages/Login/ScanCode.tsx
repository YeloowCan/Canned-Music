import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { checkQrCode, createQrCode, getAccountInfo, getQrKey } from '../../apis/login'
import styles from './style.module.scss'
import { ILoginResult, IQRCodeState } from '../../apis/types/login'

interface IScanCodeProp {
  handleLoginSuccess: (res: ILoginResult) => void
}

const ScanCode: React.FC<IScanCodeProp> = ({ handleLoginSuccess }) => {
  const [key, setKey] = useState('')
  const [url, setUrl] = useState('')
  const [state, setState] = useState<IQRCodeState>({ code: 800, message: '', cookie: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { code, cookie } = state || {}
    switch (code) {
      // 二维码过期
      case 800:
        getQrKey().then((key) => {
          setKey(key)
          setLoading(true)
          createQrCode(key).then((url) => {
            setUrl(url)
            setLoading(false)
          })
        })
        break
      // 等待扫码
      case 801:
        break
      // 待确认
      case 802:
        break
      // 登录成功
      case 803:
        localStorage.setItem('cookie', cookie)
        getAccountInfo().then(handleLoginSuccess)
        break
      default:
        break
    }
  }, [state])

  useEffect(() => {
    const timer = setInterval(() => {
      if (key) {
        checkQrCode(key).then((state) => {
          setState(state)
        })
      }
    }, 2000)
    return () => clearInterval(timer)
  }, [key])

  return (
    <div className={styles.scanContainer}>
      <div className={styles.scanTitle}>网易云音乐APP扫码登录</div>
      <div className={styles.scanImg}>
        <Spin spinning={loading}>{loading ? null : <img src={url} />}</Spin>
      </div>
    </div>
  )
}

export default ScanCode
