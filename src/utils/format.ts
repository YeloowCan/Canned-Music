/**
 * @description 播放量格式化
 * @param playCount
 */
const playCountFormat = (playCount: number) => {
  if (playCount > 1000000) {
    return `${(playCount / 10000).toFixed(0)}万`
  }
  return playCount
}

/**
 * @description 时长格式化
 * @param duration
 */
const durationFormat = (duration: number) => {
  const digit = (num: number) => {
    if (num > 9) {
      return num
    }
    return `0${num}`
  }
  const second = duration / 1000
  return `${digit(Math.floor(second / 60))}:${digit(Math.floor(second % 60))}`
}

export { playCountFormat, durationFormat }
