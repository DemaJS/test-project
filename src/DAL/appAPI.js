import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c2e39203-417e-4936-90ba-36cd8b9b6c99'
    }
})

export const usersAPI = {
    getUsers: (pageSize, currentPage) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(responce => {
            return responce.data
        })
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/`+ userId)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`,{status:status})
    }
}
export const authAPI = {
    authMe: () => {
        return instance.get('auth/me')
    },
    login: (email,password,rememberMe) => {
        return instance.post('auth/login', {email,password,rememberMe})
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}

export  const exampleAPI = {
    ajaxExample: () => {
        return instance.get(`profile/2`)
    },
    exempleAjaxUser: (pageSize) => {
        return instance.get(`users?count=${pageSize}`)
    }
}