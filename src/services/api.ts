import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-food-explorer-hhv1.onrender.com'
})
