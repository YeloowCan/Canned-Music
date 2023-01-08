import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
