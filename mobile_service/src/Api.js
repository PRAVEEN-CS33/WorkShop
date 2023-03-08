import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const Api = () => {
  const getUsers = () => {
    return axios.get(API_BASE_URL + '/get');
  };

  const getUserById = (userId) => {
    return axios.get(API_BASE_URL + '/getByName/' + userId);
  };

  const createUser = (user) => {
    return axios.post(API_BASE_URL + '/post', user);
  };

  const updateUser = (user, userId) => {
    return axios.put(API_BASE_URL + '/update/' + userId, user);
  };

  const deleteUser = (userName) => {
    return axios.delete(API_BASE_URL + '/delete' + userName);
  };

  return {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };
};

export default Api;
