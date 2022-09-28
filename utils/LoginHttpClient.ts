import axios from "axios";
import { IPostBody } from "../types";
axios.defaults.baseURL=process.env.NEXT_PUBLIC_LOGIN_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
export async function axiosAuthPost(url:string,data:IPostBody) {
    return await axios.post(url,data)
    .then(response=>response.data)
   
}