import axios from '../../../config/axios';
//post: data
//get : paramset
export const loadFilmApi = async data => {
  try {
    const result = await axios(`phim`, {
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
    const result = await axios(`admin`, {
      data:data,
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

export const loadFindFilmApi = async data =>{
  try{
    const result = await axios(`nguoi-dung/tiem-kiem`,{
      params: data,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });
    return result;
  }catch(error){
    return Promise.reject(error);
  }
};

export const loadLoginApi = async data =>{
  try{
    const result = await axios(`quan-tri-vien/login`,{
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        
      },
    });
    return result;
  }catch(error){
    return Promise.reject(error)
  }
};

export const loadAddFilmApi = async data =>{
  try{
    const result = await axios(`nguoi-dung/them-phim`,{
      method: 'POST',
      data:data,
      headers:{
        Accept: 'application/json',
      },
    });
    return result;
  }catch(error){
    return Promise.reject(error)
  }
}

// var url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable"

// export const loadfileApi = async data =>{
//   try{
//     const result = await (url,{
//       method: 'POST',
//       data:data,
//       headers:{
//         Accept: 'application/json',
//       },
//     });
//     return result;
//   }catch(error){
//     return Promise.reject(error)
//   }
// }



