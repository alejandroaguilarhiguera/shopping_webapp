import axios from 'axios';

export const GetAPI = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const PostAPI = async (url: string, data?: { [key:string]: any }): Promise<any> => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const PatchAPI = async (url: string, data: { [key:string]: any }): Promise<any> => {
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const PutAPI = async (url: string, data: { [key:string]: any }): Promise<any> => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const DeleteAPI = async (url: string): Promise<any> => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
