import { base_url } from './constants/constants'
const axios = require('axios')

const instance = axios.create({
  baseURL: base_url,
})

export default instance
