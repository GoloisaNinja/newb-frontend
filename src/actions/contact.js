import axios from 'axios';
import { setAlert } from './alert';

const baseUrl = process.env.REACT_APP_BASEAPI_URL;

// Submit the contact form

export const submitContact = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};
		const body = formData;
		const res = await axios.post(`${baseUrl}/api/contact`, body, config);
		if (res.status === 200) {
			dispatch(setAlert('Contact Form Sent!', 'success'));
		}
	} catch (error) {
		console.log(error.message);
		dispatch(setAlert('Contact form failed to send...', 'danger'));
	}
};
