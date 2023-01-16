import React from 'react'
import Banner from './Banner'
import SongList from './SongList'
import styles from './style.module.scss'

const Recommend: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <SongList />
    </div>
  )
}

export default Recommend
