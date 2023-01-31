import React, { useMemo } from 'react'
import { Col, ConfigProvider, Layout, Row, Slider } from 'antd'
import styles from './style.module.scss'
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons'
import PlayIcon from '../../PlayIcon'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changePlayingState } from '../../../redux/slices/playingAudioSlice'

const { Footer } = Layout

const FooterPlayer: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isPlaying, playingSong } = useAppSelector((store) => store.playingAudio)
  const { id, picUrl, name, song } = playingSong || {}
  const { artists } = song || {}

  const handlePlay = () => {
    if (!playingSong) {
      return
    }
    const musicAudio = document.getElementById('musicAudio') as HTMLAudioElement
    if (musicAudio.paused) {
      musicAudio.play()
    } else {
      musicAudio.pause()
    }
    dispatch(changePlayingState())
  }

  const artistsList = useMemo(() => {
    return artists?.map((a) => a.name).join('/')
  }, [artists])

  return (
    <Footer className={styles.footer}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#EC4141'
          }
        }}
      >
        <Row>
          <Col span={8}>
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
            <StepBackwardOutlined className={styles.switchIcon} />
            <PlayIcon playing={isPlaying} style={{ fontSize: 32 }} onClick={handlePlay} />
            <StepForwardOutlined className={styles.switchIcon} />
            <audio id='musicAudio' src={`https://music.163.com/song/media/outer/url?id=${id}.mp3`} autoPlay />
          </Col>
          <Col span={8} className={styles.rightControl}>
            <Row gutter={12} align='middle'>
              <Col span={12}>
                <SoundOutlined className={styles.soundIcon} />
              </Col>
              <Col span={8}>
                <Slider value={100} max={100} min={0} />
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
