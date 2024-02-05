import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://www.googleapis.com',
});

export default async function getGoogleUserInfo(token) {
  try {
    const request = await Api.get(`/oauth2/v1/userinfo?access_token=${token}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}
