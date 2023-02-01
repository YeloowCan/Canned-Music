import request from '../utils/request'

const getPlayListDetail = async (id: string) => {
  const response = await request({
    url: `/playlist/track/all?id=${id}`
  })

  return response.songs
}

export { getPlayListDetail }
