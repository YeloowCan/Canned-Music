import React from 'react'
import { PlayCircleFilled } from '@ant-design/icons'
import classnames from 'classnames'
import styles from './style.module.scss'

interface IPlayIconProps {
  style?: React.CSSProperties
  className?: string
}

const PlayIcon: React.FC<IPlayIconProps> = ({ style, className = '' }) => {
  const classes = classnames(styles.playIcon, className)
  return <PlayCircleFilled className={classes} style={style} />
}

export default PlayIcon
