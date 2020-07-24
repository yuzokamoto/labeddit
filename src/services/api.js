import axios from 'axios';

const conection = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/',
  headers: { 'content-type': 'application/json' },
});

export function Get(url, key) {
  return conection.get(url, key);
}

export function Post(url, key, data) {
  return conection.post(url, key, data);
}

export function Put(url, key, data) {
  return conection.put(url, key, data);
}

