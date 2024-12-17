'use client';

const request = (url: string, method: string = "GET", body?: object) => {

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
};

// user routes
export const login = (email: string, password: string) => {
    return request('/user/login', "POST", {email, password});
};

export const register = (name: string, email: string, password: string) => {
    return request('/user/signup', "POST", {name, email, password});
};

export const getUserById = () => {
    return request('/user/:id', "GET");
};

export const updateUserInfo = (name: string) => {
    return request('/user/', "PUT", {name});
};

export const deleteUser = (userId: string) => {
    return request('/user/', "DELETE", {userId});
};

// messages routes
export const newMessage = (senderId: string, email: string, title: string, content: string) => {
    return request('/user/new-message', "PUT", {senderId, email, title, content});
};
