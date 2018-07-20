import { RECEIVED_IMAGES } from '../constants'

export const images = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_IMAGES:
			return action.payload
		default:
			return state
	}
}