import axios from "axios";

base_url = "http://localhost:8000/api/v1";

export const callAPI = async (URL, method = 'POST',body=null, params = null) => {
    try {
      const config = {
        url: base_url + URL,
        method: method,  
        data: method !== 'GET' ? body : undefined, 
        params:  params || undefined,
      };
  
      const response = await axios(config);
  
      return {
        status: response.status,
        message: response.message,
        data: response.data ? response.data : null,
      };
    } catch (error) {
      console.error(error);
      return {
        status: error.status || null,
        message: error.message || null,
        data: error.response || null
      };
    }
  };