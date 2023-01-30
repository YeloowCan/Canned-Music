import React from 'react'
import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'
import classnames from 'classnames'
import styles from './style.module.scss'

interface IPlayIconProps {
  style?: React.CSSProperties
  playing?: boolean
  className?: string
  onClick?: () => void
}

const PlayIcon: React.FC<IPlayIconProps> = ({ style, playing = false, className = '', onClick }) => {
  const classes = classnames(styles.playIcon, className)
  return playing ? (
    <PauseCircleFilled className={classes} style={style} onClick={onClick} />
  ) : (
    <PlayCircleFilled className={classes} style={style} onClick={onClick} />
  )
}

export default PlayIcon
