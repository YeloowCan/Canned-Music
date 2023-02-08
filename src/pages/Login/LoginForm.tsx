import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Tabs } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { ILoginRequest, ILoginResult } from '../../apis/types/login'
import styles from './style.module.scss'
import { getAuthCode, login } from '../../apis/login'

interface ILoginFormProp {
  handleLoginSuccess: (res: ILoginResult) => void
}

const LoginForm: React.FC<ILoginFormProp> = ({ handleLoginSuccess }) => {
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
    login({ phone, password, captcha }).then(handleLoginSuccess)
  }
  return (
    <Form form={form} onFinish={handleSubmint} className={styles.form}>
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
                        style={{ width: 218 }}
                        placeholder='短信验证码'
                        prefix={<LockOutlined />}
                      />
                    </Form.Item>
                    <Button
                      size='large'
                      style={{ width: 150 }}
                      disabled={isSentCode > 0}
                      type='primary'
                      onClick={getPhoneAuthCode}
                    >
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
                      style={{ width: 368 }}
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
  )
}

export default LoginForm
