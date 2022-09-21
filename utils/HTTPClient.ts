import axios from "axios";
axios.defaults.baseURL=process.env.NEXT_PUBLIC_BASE_URL;

export async function axiosGet(url:string) {  
    return await axios.get(url)
    .then(response=>response.data)
    .catch(error=>console.log(error))
};
// export async function post(url:string,data,config) {
//     return await axios.post(url,data,config)
//     .then(response=>response.data)
// }
// export function del(url:string,config={}) {
//     return axios.delete(url,config={})
// } 
// export function put(url:string,data,config) {
//     return axios.put(url,data,config)
//     .then(response=>response.data)
//     .catch(error=>console.log(error))
// }
// export function patch(url:string,data,config) {
//     return axios.patch(url,data,config)
//     .then(response=>response.data)
//     .catch(error=>console.log(error))
// }
