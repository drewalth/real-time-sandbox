import axios from 'axios'

const config = {
  baseURL: '/'
}

const httpClient = axios.create(config)

export {httpClient};