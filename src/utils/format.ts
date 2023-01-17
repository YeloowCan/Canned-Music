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

export { playCountFormat }
