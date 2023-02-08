import React, { useEffect, useState } from 'react'
import { Card, Col, message, Row } from 'antd'
import { ILoginResult } from '../../apis/types/login'
import { useNavigate } from 'react-router-dom'
import { SESSION_LOCAL_KEY } from '../../constants/keys'
import { loginIn } from '../../redux/slices/loginSlice'
import { useDispatch } from 'react-redux'
import ScanCode from './ScanCode'
import styles from './style.module.scss'
import LoginForm from './LoginForm'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSentCode, setIsSentCode] = useState<number>(0)

  useEffect(() => {
    if (isSentCode > 0) {
      const ticker = setInterval(() => {
        setIsSentCode(isSentCode - 1)
      }, 1000)
      return () => {
        clearInterval(ticker)
      }
    }
  }, [isSentCode])

  const handleLoginSuccess = (res: ILoginResult) => {
    if (res) {
      const userInfo = {
        ...res,
        userId: res.profile.userId
      }
      message.success('登录成功')
      localStorage.setItem(SESSION_LOCAL_KEY, JSON.stringify(userInfo))
      dispatch(loginIn(userInfo))
      navigatePage()
    }
  }

  const navigatePage = () => {
    navigate('/recommend')
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Row align='middle'>
          <Col span={12}>
            <ScanCode handleLoginSuccess={handleLoginSuccess} />
          </Col>
          <Col span={12}>
            <LoginForm handleLoginSuccess={handleLoginSuccess} />
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Login
