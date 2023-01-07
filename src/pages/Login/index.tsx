import { FC, useEffect, useState } from 'react'
import { getAuthCode, login } from '../../apis/login'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import styles from './index.module.scss'
import { ILoginRequest } from '../../apis/types/login'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const navigate = useNavigate()

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
    const { phone, password } = value
    login({ phone, password }).then((res) => {
      res && navigate('/song')
    })
  }

  return (
    <div className={styles.container}>
      <Card>
        <Form form={form} onFinish={handleSubmint}>
          <Form.Item name='phone' rules={[{ required: true }]}>
            <Input size='large' placeholder='手机号' prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
            {/* <Row gutter={12}> */}
            <Input.Group compact>
              <Form.Item name='password'>
                <Input
                  size='large'
                  name='password'
                  style={{ width: 250 }}
                  placeholder='短信验证码'
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Button size='large' disabled={isSentCode > 0} type='primary' onClick={getPhoneAuthCode}>
                {isSentCode ? `${isSentCode}秒后重新获取` : '获取验证码'}
              </Button>
            </Input.Group>
            {/* <Col span={15}>
                <Input placeholder='短信验证码' />
              </Col>
              <Col span={9}>
                <Button disabled={isSentCode > 0} type='primary' onClick={getPhoneAuthCode}>
                  {isSentCode ? `${isSentCode}秒后重新获取` : '获取验证码'}
                </Button>
              </Col> */}
            {/* </Row> */}
          </Form.Item>
          <Form.Item>
            <Button size='large' type='primary' htmlType='submit' className={styles.submitBtn}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
