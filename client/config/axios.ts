import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:9090'
})

export default Axios
