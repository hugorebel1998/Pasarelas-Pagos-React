import axios from "axios";

const baseURL = import.meta.env.VITE_URL_API;

const http = axios.create({ baseURL });

http.interceptors.request.use((config) => {

    const response = localStorage.getItem('user')

    const user = JSON.parse(response)

    if (user)
        config.headers.Authorization = `Bearer ${user.access_token}`

    return config;
});

http.interceptors.response.use(({ data }) => {
    return data;
}, async ({ response }) => {

    if (response.status === 401 && response.statusText == 'Unauthorized') {

        const userStorage = localStorage.getItem('user');
        const userS = JSON.parse(userStorage);
        const { access_token, user } = userS;
        console.log("Actiguo:", access_token)

        try {
            const response = await axios.post(`${baseURL}auth/refresh-token`, { token: access_token});

            const newToken = response.data.access_token
            user.access_token = newToken;

            localStorage.setItem('user', JSON.stringify(user));

            axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

        } catch (error) {

        }
    }


    console.log("Respuesta", response)

    return Promise.reject(response.data);
});

export default http;