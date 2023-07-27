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

const getAllFilteredJobs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs.json?orderBy="userId"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const allJobs = Object.values(data);
        const wishlist = allJobs.filter((job) => job.status === 'Wishlist');
        const applied = allJobs.filter((job) => job.status === 'Applied');
        const offer = allJobs.filter((job) => job.status === 'Offer');
        const interview = allJobs.filter((job) => job.status === 'Interview');
        const rejected = allJobs.filter((job) => job.status === 'Rejected');
        resolve({
          wishlist, applied, interview, offer, rejected,
        });
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const searchJobs = (uid, query) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs.json?orderBy="userId"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const allJobs = Object.values(data);
        const filteredJobs = allJobs.filter((job) => (
          job.title.toLowerCase().includes(query)
          || job.description.toLowerCase().includes(query)
          || job.company.toLowerCase().includes(query)
        ));
        console.log(filteredJobs);
        const wishlist = filteredJobs.filter((job) => job.status === 'Wishlist');
        const applied = filteredJobs.filter((job) => job.status === 'Applied');
        const offer = filteredJobs.filter((job) => job.status === 'Offer');
        const interview = filteredJobs.filter((job) => job.status === 'Interview');
        const rejected = filteredJobs.filter((job) => job.status === 'Rejected');
        resolve({
          wishlist, applied, interview, offer, rejected,
        });
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getJobById = (jobId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs/${jobId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postNewJob = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchJob = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs/${payload.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteJob = (jobId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/jobs/${jobId}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllJobs,
  getAllFilteredJobs,
  postNewJob,
  patchJob,
  getJobById,
  deleteJob,
  searchJobs,
};
