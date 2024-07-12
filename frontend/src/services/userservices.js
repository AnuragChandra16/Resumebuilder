import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getUserFromStorage } from "../utils/getUserFromStorage";

//! Get the token
const token = getUserFromStorage();

//login
export const loginAPI=async ({email,password})=>{
    const response =await axios.post(`${BASE_URL}/users/login`,{
        email,
        password,
    });

    return response.data;
}

//register

export const registerAPI=async ({email,password,username})=>{
    const response =await axios.post(`${BASE_URL}/users/register`,{
        email,
        password,
        username,
    });

    return response.data;
}