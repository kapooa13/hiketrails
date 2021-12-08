import axios from "axios";

const BASEURL = "https://ankitkapoor.me/api";
export const DEFAULT_IMAGE = "https://hiketrails-image-uploads.s3.us-east-2.amazonaws.com/default-hike-image.jpg"

const standardAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.defaults.withCredentials = true;

export const getRequest = (params, requestUrl) => {
  return standardAxios.get(requestUrl, { params: params })
};

export const postRequest = (params, requestUrl) => {
  return standardAxios.post(requestUrl, { params: params })
};


export const uploadImage = (image) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post(
    BASEURL + '/upload_image.php',
    formData,
    {headers : {
      'content-type': 'multipart/form-data'
    }}
  );
};

