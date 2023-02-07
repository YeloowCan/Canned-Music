import React, { useEffect, useState } from 'react'
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons'
import PlayIcon from '../../PlayIcon'
import { Row, Col, Progress } from 'antd'
import { durationFormat } from '../../../utils/format'
import styles from './style.module.scss'
import { useAppSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { changePlayingState, setPlayingSong } from '../../../redux/slices/playingAudioSlice'
import { MainRed } from '../../../constants/styles'

const PlayControl: React.FC = () => {
  const dispatch = useDispatch()
  const { isPlaying, playingSong, playlist = [] } = useAppSelector((store) => store.playingAudio)
  const { id, dt = 0 } = playingSong || {}
  const musicAudio = document.getElementById('musicAudio') as HTMLAudioElement

  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setCurrentTime(0)
  }, [playingSong])

  useEffect(() => {
    let id = 0

    if (currentTime >= 0) {
      id = setTimeout(() => {
        setCurrentTime(currentTime + 1)
      }, 1000)
    }

    return () => {
      clearTimeout(id)
    }
  }, [currentTime])

  const handlePlay = () => {
    if (!playingSong) {
      return
    }
    if (musicAudio.paused) {
      musicAudio.play()
    } else {
      musicAudio.pause()
    }
    dispatch(changePlayingState())
  }

  const playSwitch = (type: 'prev' | 'next') => {
    let playingIndex = 0
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === id) {
        playingIndex = i
        break
      }
    }
    const prevSong = playlist[playingIndex + (type === 'prev' ? -1 : 1)]
    dispatch(
      setPlayingSong({
        ...prevSong,
        picUrl: prevSong.al.picUrl,
        song: {
          artists: prevSong.ar
        }
      })
    )
  }

  return (
    <>
      <StepBackwardOutlined className={styles.switchIcon} onClick={() => playSwitch('prev')} />
      <PlayIcon playing={isPlaying} style={{ fontSize: 32 }} onClick={handlePlay} />
      <StepForwardOutlined className={styles.switchIcon} onClick={() => playSwitch('next')} />
      <audio id='musicAudio' src={`https://music.163.com/song/media/outer/url?id=${id}.mp3`} autoPlay />
      <Row gutter={12}>
        <Col span={2} className={styles.time}>
          {durationFormat(currentTime * 1000)}
        </Col>
        <Col span={20}>
          <Progress strokeColor={MainRed} percent={(currentTime * 100000) / dt} size='small' showInfo={false} />
        </Col>
        <Col span={2} className={styles.time}>
          {durationFormat(dt)}
        </Col>
      </Row>
    </>
  )
}

export default PlayControl
