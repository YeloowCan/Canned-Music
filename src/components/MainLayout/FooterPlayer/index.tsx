import React, { useMemo } from 'react'
import { Col, ConfigProvider, Layout, Row, Slider } from 'antd'
import { SoundOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeVolume } from '../../../redux/slices/playingAudioSlice'
import PlayControl from './PlayControl'
import styles from './style.module.scss'

const { Footer } = Layout

const FooterPlayer: React.FC = () => {
  const dispatch = useAppDispatch()
  const { playingSong, volume } = useAppSelector((store) => store.playingAudio)
  const { picUrl, name, song } = playingSong || {}
  const { artists } = song || {}

  const musicAudio = document.getElementById('musicAudio') as HTMLAudioElement

  const handleChangeVolume = (value: number) => {
    if (musicAudio?.played) {
      musicAudio.volume = value / 100
    }
    dispatch(changeVolume(value))
  }

  const artistsList = useMemo(() => {
    return artists?.map((a) => a.name).join('/')
  }, [artists])

  return (
    <Footer className={styles.footer}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FF0000'
          }
        }}
      >
        <Row>
          <Col span={8} className={styles.left}>
            <Row align='middle'>
              <Col xxl={2} xl={3} span={4} xs={6}>
                <img src={picUrl} className={styles.songPic} />
              </Col>
              <Col xxl={22} xl={21} span={20} xs={18}>
                <Row title={name} className={styles.songName}>
                  {name}
                </Row>
                <Row title={artistsList} className={styles.songName}>
                  {artistsList}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={8} className={styles.center}>
            <PlayControl />
          </Col>
          <Col span={8} className={styles.rightControl}>
            <Row gutter={12} align='middle'>
              <Col span={12}>
                <SoundOutlined className={styles.soundIcon} />
              </Col>
              <Col span={8}>
                <Slider onChange={handleChangeVolume} value={volume} max={100} min={0} />
              </Col>
              <Col span={4}></Col>
            </Row>
          </Col>
        </Row>
      </ConfigProvider>
    </Footer>
  )
}

export default FooterPlayer
