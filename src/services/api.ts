import { getUserLocalStorage } from "@/app/context/authProvider/Utils";
import axios from "axios";


const api = axios.create({
    baseURL: 'http:localhost:8080'
})

api.interceptors.request.use(
    (config) => {
      const user = getUserLocalStorage()
  
      config.headers.Authorization = user?.token;
  
      return config
    },
    (error) => {
      //enviar para login
      return Promise.reject(error)
    },
  )
  
export default api;