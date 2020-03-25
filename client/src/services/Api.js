import axios from 'axios' // connecting to API via axios

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
