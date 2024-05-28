import authApi from '@/services/auth.api';

export const singLogin = async (data) => {

    try {

        const response = await authApi.login(data);

        const { access_token, user } = response;

        localStorage.setItem('user', JSON.stringify({ access_token, user }));

        return {
            ok: true,
            access_token,
            user,
        }
    } catch (error) {
        return {
            ok: false,
            error
        }
    }
}

export const singRegister = async (data) => {

    try {
        const response = await authApi.registro(data);

        const { id, username, email, nombre_completo, estatus } = response;

        const user = {
            id,
            username,
            email,
            nombre_completo,
            estatus,
        }

        localStorage.setItem('user', JSON.stringify({ user }));

        return {
            ok: true,
            user
        }
        
    } catch (error) {
        return {
            ok: false,
            error
        }
    }
}