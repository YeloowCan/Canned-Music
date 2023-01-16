import React from 'react'
import { useRequest } from 'ahooks'
import { getBanner } from '../../../apis/recommend'
import Slider, { Settings } from 'react-slick'
import { Spin } from 'antd'
import styles from './style.module.scss'

const setting: Settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Banner: React.FC = () => {
  const { data, loading } = useRequest(getBanner)

  const handleClick = () => {
    console.log('click')
  }

  return (
    <Spin spinning={loading}>
      <Slider {...setting}>
        {data?.map(({ imageUrl }) => (
          <img className={styles.image} key={imageUrl} src={imageUrl} onClick={() => handleClick()} />
        ))}
      </Slider>
    </Spin>
  )
}

export default Banner
