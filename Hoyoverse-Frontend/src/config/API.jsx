import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:8080/api/v1",
});

export const headers = (token) => ({
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});
