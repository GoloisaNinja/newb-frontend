import axios from 'axios';
import { GET_ADVICE } from './types';

const baseUrl = process.env.REACT_APP_BASEAPI_URL;

// Get Advice

export const getAdvice = () => async (dispatch) => {
	try {
		const res = await axios.get(`${baseUrl}/api/advice`);
		dispatch({
			type: GET_ADVICE,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
