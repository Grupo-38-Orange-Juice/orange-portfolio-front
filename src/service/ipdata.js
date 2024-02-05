import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.ipdata.co',
  params: {
    'api-key': '4afd91cd18a5bab68f816e63ddfc6a04e037064fea583b8ef27caeb9',
  },
});

export default async function getIpInfo() {
  try {
    const request = await Api.get('');
    return { data: request.data, status: request.status };
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}
