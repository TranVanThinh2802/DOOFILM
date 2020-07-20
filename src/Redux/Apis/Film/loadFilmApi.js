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

export const loadUserApi = async data => {
  try {
    const result = await axios(`nguoi__dung`, {
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

export const loadLoginApi = async data =>{
  try{
    const result = await axios(`dang-nhap`,{
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json'
      },
    });
    return result;
  }catch(error){
    return Promise.reject(error)
  }
};



