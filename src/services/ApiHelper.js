import axios from "axios";



export const callAPI = async (URL, method = 'POST', body = null, params = null) => {
  try {
    const base_url = "http://localhost:8000/api/v1";
    const config = {
      url: base_url + URL,
      method: method,
      data: method !== 'GET' ? body : undefined,
      params: params || undefined,
      headers: {
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJyb2hpdF9ib2hyYUBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiUm9oaXQiLCJsYXN0X25hbWUiOiJCb2hyYSIsInJvbGVfbmFtZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTczODQzNzA5MCwiZXhwIjoxNzM4NTIzNDkwfQ.DPO28heNqVnkEO6p-3UJ6B2ldqYlYpS6qOYkRSQhlkU'
      }
    };

    const response = await axios(config);
    // console.log("response from apiHandler: ", response);
    return {
      status: response.data?.status,
      message: response.data?.message,
      data: response.data?.data ? response.data.data : null,
      error: response.data.error
    };
  } catch (error) {
    console.error(error);
    return {
      status: error.data?.status || null,
      message: error.data?.message || null,
      data: error.data?.data ? error.data.data : null,
      error: true
    };
  }
};