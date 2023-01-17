import React from 'react'
import Banner from './Banner'
import LatestMusic from './LatestMusic'
import SongList from './SongList'
import styles from './style.module.scss'

const Recommend: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <SongList />
      <LatestMusic />
    </div>
  )
}

export default Recommend
