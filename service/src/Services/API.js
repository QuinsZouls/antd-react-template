import { create } from 'apisauce';
import { store } from '../Redux/store';
import { dev, URL_DEV, URL_TEST } from '../Settings/general.json';

export const token = () => store.getState().auth.token;
// Define the api
const API = create({
  baseURL: dev ? URL_DEV : URL_TEST,
});

export async function login(email, password) {
  return await API.post('/signin', { email, password });
}
