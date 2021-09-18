import axios from "axios"
import {environments} from "../Environments";


const axiosDefault = () => {
    axios.defaults.baseURL = environments.baseURL
}

export {
    axiosDefault
}
