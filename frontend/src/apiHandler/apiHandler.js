import axios from "axios";

export function apiGet(url) {
    return axios.get(url, {withCredentials: true})
}

export function apiPost(url, body) {
    return axios.post(url, {withCredentials: true, body: body})
}

export function me() {
    return apiGet("http://localhost:8080/api/@me");
}
