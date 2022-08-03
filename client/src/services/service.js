
import axios from 'axios';

const service = axios.create({
	baseURL: `http://localhost:5005/`
});

export default service;
