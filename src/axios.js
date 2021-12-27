import axios from "axios";

let baseURL;
baseURL = process.env.BASEURL || 'http://localhost:4000/';

let Axios = axios;
const init = () => {
  Axios = axios.create({
    baseURL: baseURL,
    timeout: 60000,
  });
  Axios.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
  Axios.interceptors.response.use(handleSuccess, handleError);
};

const handleSuccessRequest = (request) => {
  return request;
};

const handleErrorRequest = (error) => {
  return Promise.reject(error);
};

const handleSuccess = (response) => {
  return response;
};

const handleError = (error) => {
  return Promise.reject(error.response);
};

init();

export default Axios;