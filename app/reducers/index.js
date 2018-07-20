import { combineReducers } from 'redux'
import { loading, success, failed } from './processor'
import { images } from './images'

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  images
})

export default rootReducers