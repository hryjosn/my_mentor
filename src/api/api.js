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
/**
 * 取得會員資訊 [GET]
 */
export const callGetUserInfo = () => get('user/info');

/** -------------------------- 會員 end -------------------------- */

/** -------------------------- 問題 -------------------------- */
// /**
//  * Get all current issue [GET]
//  */
export const callGetAllIssues = () => request.get('issue');
// /**
//  * Get issue by id [GET]
//  */

export const callGetIssueById = ({ _id }) => request.get(`issue/${_id}`);
/**
 *  Add new issue [POST]
 * @returns {Promise<*>}
 */
export const callAddNewIssue = (postData) => post('issue', postData);

/** -------------------------- 問題 end -------------------------- */

