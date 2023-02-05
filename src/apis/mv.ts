import request from '../utils/request'
import { IMVList } from './types/mv'

const getMVList = async (area: string): Promise<IMVList[]> => {
  const response = await request({
    url: `/mv/first?area=${area}&limit=28`
  })

  return response.data
}

export { getMVList }
