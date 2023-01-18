import React from 'react'
import { Col, Layout, Row } from 'antd'
import styles from './style.module.scss'
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons'
import PlayIcon from '../../PlayIcon'

const { Footer } = Layout

const FooterPlayer: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <Row>
        <Col span={8}></Col>
        <Col span={8} className={styles.center}>
          <StepBackwardOutlined className={styles.switchIcon} />
          <PlayIcon style={{ fontSize: 32 }} />
          <StepForwardOutlined className={styles.switchIcon} />
        </Col>
        <Col span={8}></Col>
      </Row>
    </Footer>
  )
}

export default FooterPlayer
