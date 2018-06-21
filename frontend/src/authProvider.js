import { AUTH_LOGIN } from 'react-admin';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    let data = { auth: { email: username, password: password } }
    const request = new Request('http://localhost:8000/api/user/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    return fetch(request)
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ jwt }) => {
      console.group('%c User Token:', 'color: green; font-weight: bold;');
      // console.log('%c User Token:', 'color: green; font-weight: bold;');
      console.log('%c' + jwt, 'color: blue; font-weight: bold;');
      console.groupEnd();
      // console.log("user token: ", jwt)
      localStorage.setItem('token', jwt);
    });
  }
  return Promise.resolve();
}

let data = { auth: { email: 'eric.london@example.com', password: "password" } }







// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';

// export default (type, params) => {
//   if (type === AUTH_LOGIN) {
//     const { username, password } = params;
//     let data = {
//       auth: {
//         email: username,
//         password: password
//       }
//     }
//     const request = new Request('http://localhost:8000/api/user/token', {
//       method: 'POST',
//       body: data,
//       headers: new Headers({ 'Content-Type': 'application/json' }),
//     })
//     return fetch(request)
//       .then(response => {
//         if (response.status < 200 || response.status >= 300) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then(({ token }) => {
//         localStorage.setItem('token', token);
//       });
//     }
//     return Promise.resolve();
//   }
//   if (type === AUTH_LOGOUT) {
//     localStorage.removeItem('username');
//     return Promise.resolve();
//   }
//   if (type === AUTH_ERROR) {
//     return Promise.resolve();
//   }
//   if (type === AUTH_CHECK) {
//     return localStorage.getItem('username')
//         ? Promise.resolve()
//         : Promise.reject();
//   }
//   return Promise.reject('Unkown method');
// };
