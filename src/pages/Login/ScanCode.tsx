import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { checkQrCode, createQrCode, getQrKey } from '../../apis/login'
import styles from './style.module.scss'

const ScanCode: React.FC = () => {
  const [key, setKey] = useState('')
  const [url, setUrl] = useState('')
  const [state, setState] = useState(800)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state === 800) {
      getQrKey().then((key) => {
        setKey(key)
        setLoading(true)
        createQrCode(key).then((url) => {
          setUrl(url)
          setLoading(false)
        })
      })
    }
  }, [state])

  useEffect(() => {
    const timer = setInterval(() => {
      checkQrCode(key).then((state) => {
        setState(state.code)
      })
    }, 5000)
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
