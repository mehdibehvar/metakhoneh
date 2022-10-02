import axios from "axios";
import { IPostBody } from "../types";
axios.defaults.baseURL=process.env.NEXT_PUBLIC_LOGIN_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
export async function axiosAuthPost<T extends IPostBody>(url:string,data:T) {
    return await axios.post(url,data)
    .then(response=>response.data)
   
}