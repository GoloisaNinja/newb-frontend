import axios from 'axios';
import { GET_OBSTACLES } from './types';

const baseUrl = process.env.REACT_APP_BASEAPI_URL;

// Get All Obstacles

export const getObstacles = () => async (dispatch) => {
	try {
		const res = await axios.get(`${baseUrl}/api/obstacles`);
		dispatch({
			type: GET_OBSTACLES,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
