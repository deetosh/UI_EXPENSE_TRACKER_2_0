import axios from "axios";



export const callAPI = async (URL, method = 'POST',body=null, params = null) => {
    try {
      const base_url = "http://localhost:8000/api/v1";
      const config = {
        url: base_url + URL,
        method: method,  
        data: method !== 'GET' ? body : undefined, 
        params:  params || undefined,
        // headers:{
        //   'authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJyb2hpdF9ib2hyYUBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiUm9oaXQiLCJsYXN0X25hbWUiOiJCb2hyYSIsInJvbGVfbmFtZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTczODM0NjA4NywiZXhwIjoxNzM4NDMyNDg3fQ.hj1PzvTsgBjut3kECLVyUr6mekWo-a0P1aJJXpYfHfg'
        // }
      };
  
      const response = await axios(config);
      return {
        status: response.data?.status,
        message: response.data?.message || "Success",
        data: response.data?.data ? response.data.data : null,
      };
    } catch (error) {
      console.error(error);
      return {
        status: error.status || 500,
        message: error.message || "An Error Occured",
        data: error.response || null
      };
    }
  };