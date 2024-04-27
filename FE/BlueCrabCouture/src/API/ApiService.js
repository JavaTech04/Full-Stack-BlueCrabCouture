import axios from "axios";
const api = "http://localhost:8080/api/user"
export const getAllUserAccount = async () => {
    try {
        const response = await axios.get(api)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserAccount = async (id) => {
    try {
        await axios.delete(`${api}/${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const storeUserAccount = async (user) => {
    await axios.post(api, user)
}

export const updateUserAccount = async (user) => {
    await axios.put(api, user)
}
export const findUserRole = async (id) => {
    try {
        const response = await axios.get(`${api}/role/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const findUserAccountById = async (id) => {
    try {
        const response = await axios.get(`${api}/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}