import axios from '../../../config/axios';
//post: data
//get : paramset
export const loadFilmApi = async data => {
  try {
    const result = await axios(`film`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

