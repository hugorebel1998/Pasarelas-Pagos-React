import usuarioApi from "@/services/usuario.api";

export const select = async () => {

    try {
        const response = await usuarioApi.listar();
        return {
            ok: true,
            response
        }

    } catch (error) {
        return {
            ok: false,
            error
        }
    }
}