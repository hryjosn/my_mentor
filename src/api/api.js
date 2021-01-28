import { post, get, patch } from './restAPI';
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
/**
 * 更新會員資訊 [Patch]
 */
export const callUpdateUserInfo = postData => patch('user', postData);

/** -------------------------- 會員 end -------------------------- */

/** -------------------------- 有空時間管理 -------------------------- */
/**
 * 更新有空時間 [Patch]
 */
export const callUpdateAvailableTime = postData => patch('availableTime', postData);
export const callGetAvailableTimeList = postData => get('availableTime', postData);
export const callGetAvailableTimeListById = ({ _id, ...postData }) => get(`availableTime/${_id}`, postData);

/** -------------------------- 有空時間管理 End -------------------------- */

/** -------------------------- 問題 -------------------------- */
// /**
//  * Get all current issue [GET]
//  */
export const callGetAllIssues = (postData) => {
    if (postData) {
        const { page, limit } = postData;
        return request.get(`issue?page=${page}&limit=${limit}`)
    } else {
        return request.get(`issue`)
    }

};
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

