import axios from 'axios';
const url = 'http://localhost:5417/api/';
const headers = { 'Content-Type': 'multipart/form-data' };

export const sendPhoto = (values) => {
  const form = new FormData();

  for (const key in values) {
    form.append(key, values[key]);
  }

  axios.post(url, form, {
    headers,
  });
};

export const getPhoto = (id) => axios.get(url + id);

export const updatePhoto = (id, values) => {
  const form = new FormData();

  for (const key in values) {
    form.append(key, values[key]);
  }

  axios.put(url + id, form, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deletePhoto = (id) => axios.delete(url + id);
