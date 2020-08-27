import { post, get } from './restAPI';
import axios from 'axios';

const API_URL = process.env.API_URL;
const endPoint = API_URL;
const request = axios.create({
    baseURL: endPoint,
});
/** -------------------------- 會員 -------------------------- */
/**
 * 會員登入 [POST]
 */
export const callLoginUser = postData => request.post('user/login', postData);

/**
 * 會員註冊 [POST]
 */
export const callSignUpUser = postData => request.post('user', postData);

/** -------------------------- 會員 end -------------------------- */
/** -------------------------- 餐廳 -------------------------- */
// /**
//  * 會員登入 [POST]
//  */
export const callGetMyShopInfo = (postData) => get('shop', postData);


/** -------------------------- 餐廳 end -------------------------- */

