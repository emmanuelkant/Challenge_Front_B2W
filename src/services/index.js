import axios from 'axios';
import config from './config';

const instance = axios.create(config);

export default instance;
