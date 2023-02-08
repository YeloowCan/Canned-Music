import React from 'react'
import { useAppSelector } from '../../hooks'
import Banner from './Banner'
import LatestMusic from './LatestMusic'
import SongList from './SongList'
import styles from './style.module.scss'

const Recommend: React.FC = () => {
  const { isLogined } = useAppSelector((store) => store.login)
  return (
    <div className={styles.container}>
      {isLogined && (
        <>
          <Banner />
          <SongList />
          <LatestMusic />
        </>
      )}
    </div>
  )
}

export default Recommend
