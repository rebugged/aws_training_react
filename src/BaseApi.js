import axios from 'axios';
import endpoint from './Endpoints';

function BaseApi(type, urlKey, data) {
    const url = endpoint[urlKey];
    if(type === 'GET') {
        if(data)
            return axios.get(url+'/'+data);
        else
            return axios.get(url);
    }
    if(type === 'POST') {
        return axios.post(url, data);
    }
}

export default BaseApi