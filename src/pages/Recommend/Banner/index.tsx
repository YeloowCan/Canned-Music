import React from 'react'
import { useRequest } from 'ahooks'
import { getBanner } from '../../../apis/recommend'
import { Carousel } from 'antd'
import styles from './style.module.scss'

const Banner: React.FC = () => {
  const { data } = useRequest(getBanner)

  console.log(data)

  const handleClick = (url: string) => {
    // window.open(url)
  }

  return (
    <Carousel autoplay className={styles.carousel}>
      {data?.map(({ imageUrl, url }) => (
        <img key={imageUrl} src={imageUrl} onClick={() => handleClick(url)} />
      ))}
    </Carousel>
  )
}

export default Banner
