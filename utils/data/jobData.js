import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllJobs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/items/${firebaseKey}.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const postItem = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/items.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const patchItem = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/items/${payload.firebaseKey}.json`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/items/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/items.json?orderBy="orderID"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

// export {
//   getAllJobs,
// };
export default getAllJobs;
