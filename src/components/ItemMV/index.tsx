import React from 'react'
import { IMVList } from '../../apis/types/mv'
import styles from './style.module.scss'

interface ItemMVProps {
  data: IMVList | undefined
}

const ItemMV: React.FC<ItemMVProps> = ({ data }) => {
  const { cover = '', name, artists } = data || {}

  return data ? (
    <div className={styles.container}>
      <img src={cover} className={styles.coverImg} />
      <div className={styles.name}>{name}</div>
      <div>{artists?.map((a) => a.name).join(' / ')}</div>
    </div>
  ) : null
}

export default ItemMV
