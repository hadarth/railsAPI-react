import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import decodeJwt from 'jwt-decode';

export default (type, params) => {
  console.groupCollapsed('%c ****authProvider****', 'color: blue; font-weight: bold;');
    console.log("params: ",params)
    console.log("type: ",type)
  console.groupEnd();

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
      console.groupCollapsed('%c ****User Login Token ---> LocalSorage****', 'color: green; font-weight: bold;');
        console.log('%c' + jwt, 'color: blue; font-weight: bold;');
      console.groupEnd();

      const decodedToken = decodeJwt(jwt);
      localStorage.setItem('token', jwt);
      localStorage.setItem('role', decodedToken.role); //we dont add role in server side yet
    });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    const status  = params.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    // here we check credentials for each resource
    // example: localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' });
    console.groupCollapsed('%c AUTH_CHECK', 'color: blue; font-weight: bold;');
      console.log("params: ",params)
      console.log("resource: ",resource)
    console.groupEnd();

    const { resource } = params;
    if (resource === 'users') {
      // check credentials for the users resource
    }
    if (resource === 'events') {
      // check credentials for the events resource
    }
    if (resource === 'managers') {
      // check credentials for the managers resource
    }
    if (resource === 'tickets') {
      // check credentials for the tickets resource
    }
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
