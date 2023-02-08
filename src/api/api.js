import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "1b7eefb5-c8ec-4039-97f6-904b2b6a88f2"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const userAPI = {
    getUsers(currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },
    unfollow(id)  {
        return instance.delete(`follow/${id}`)
            /*.then(response => {
                return response.data
            })*/;

    },
    follow(id)  {
        return instance.post(`follow/${id}`)

    }
};

export const authAPI = {
    authUsers()  {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });

    },
    login(email, password, rememberMe = false)  {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            });

    },
    logout()  {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            });

    }
}

export const profileAPI = {
    profileLocation(userId)  {
        return instance.get(`profile/`+userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}