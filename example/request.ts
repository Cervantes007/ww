// export const requests = {
//   getUsers: <T>(data: T, options = {}) => request('getUsers', { ...options, ...data }),
//   getUser: (data) => request('getUsers', { data }),
//   createUser: (data) => request('createUser', { data }),
//   editUser: (data) => request('createUser', { data }),
//   deleteUser: (data) => request('createUser', { data }),
// };
//
// interface User {
//   name: string;
// }
// requests.getUsers<User>({ name: 'Cervantes' });
//
// const request = (action, config) => {
//   config.url = `/${action}`;
//   // return axios.post(config);
// };
