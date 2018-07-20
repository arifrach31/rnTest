import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVED_IMAGES } from '../constants'
export const fetchImages = () => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_FETCH_IMAGES'))
    try {
      const response = await fetch(`https://dog.ceo/api/breed/boxer/images`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log('rsponse: ', data.message)
      await dispatch(receivedImages(data.message))
      await dispatch(setSuccess(true, 'SUCCESS_FETCH_IMAGES'))
      await dispatch(setLoading(false, 'LOADING_FETCH_IMAGES'))
    }catch(e) {
      console.log('error:', e)
      dispatch(setFailed(true, 'FAILED_FETCH_IMAGES', e))
      dispatch(setLoading(false, 'LOADING_FETCH_IMAGES'))
    }
  }
}

const receivedImages = data => ({
  type: RECEIVED_IMAGES,
  payload: data
})