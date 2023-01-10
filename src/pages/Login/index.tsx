import React, { useEffect, useState } from 'react'
import { getAuthCode, login } from '../../apis/login'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Tabs } from 'antd'
import { ILoginRequest } from '../../apis/types/login'
import { useNavigate } from 'react-router-dom'
import { SESSION_LOCAL_KEY } from '../../constants/keys'
import styles from './index.module.scss'
import { loginIn } from '../../redux/slices/loginSlice'
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form] = Form.useForm()
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

  const getPhoneAuthCode = () => {
    const phone = form.getFieldValue('phone')
    getAuthCode(phone).then(() => {
      setIsSentCode(60)
    })
  }

  const handleSubmint = (value: ILoginRequest) => {
    const { phone, password, captcha } = value
    login({ phone, password, captcha }).then((res) => {
      if (res) {
        message.success('登录成功')
        localStorage.setItem(SESSION_LOCAL_KEY, JSON.stringify(res))
        dispatch(loginIn(res))
        navigatePage()
      }
    })
  }

  const navigatePage = () => {
    navigate('/song')
  }

  return (
    <div className={styles.container}>
      <Card>
        <Form form={form} onFinish={handleSubmint}>
          <Tabs
            defaultActiveKey='1'
            items={[
              {
                label: '验证码登录',
                key: '1',
                children: (
                  <>
                    <Form.Item name='phone' rules={[{ required: true }]}>
                      <Input size='large' placeholder='手机号' prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                      {/* <Row gutter={12}> */}
                      <Input.Group compact>
                        <Form.Item name='captcha'>
                          <Input
                            size='large'
                            name='captcha'
                            style={{ width: 250 }}
                            placeholder='短信验证码'
                            prefix={<LockOutlined />}
                          />
                        </Form.Item>
                        <Button size='large' disabled={isSentCode > 0} type='primary' onClick={getPhoneAuthCode}>
                          {isSentCode ? `${isSentCode}秒后重新获取` : '获取验证码'}
                        </Button>
                      </Input.Group>
                    </Form.Item>
                    <Form.Item>
                      <Button size='large' type='primary' htmlType='submit' className={styles.submitBtn}>
                        登录
                      </Button>
                    </Form.Item>
                  </>
                )
              },
              {
                label: '密码登录',
                key: '2',
                children: (
                  <>
                    <Form.Item name='phone' rules={[{ required: true }]}>
                      <Input size='large' placeholder='手机号' prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                      {/* <Row gutter={12}> */}
                      <Form.Item name='password'>
                        <Input.Password
                          size='large'
                          name='password'
                          style={{ width: 360 }}
                          placeholder='密码'
                          prefix={<LockOutlined />}
                        />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <Button size='large' type='primary' htmlType='submit' className={styles.submitBtn}>
                        登录
                      </Button>
                    </Form.Item>
                  </>
                )
              }
            ]}
          ></Tabs>
        </Form>
      </Card>
    </div>
  )
}

export default Login
