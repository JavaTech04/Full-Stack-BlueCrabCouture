import axios from 'axios';
const api = "http://localhost:8080/api/color"
export const getAllColors = async () => {
    try {
        const response = await axios.get(api)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}
export const storeColor = async (color) => {
    try {
        await axios.post(api, color)
    } catch (error) {
        throw error
    }
}
export const updateColor = async (color) => {
    try {
        await axios.put(api, color)
    } catch (error) {
        throw error
    }
}

export const deleteColor = async (id) => {
    await axios.delete(`${api}/${id}`)
}

export const findColorById = async (id) => {
    const result = await axios.get(`${api}/${id}`)
    return result.data
}