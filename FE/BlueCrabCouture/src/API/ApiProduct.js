import axios from 'axios';
const api = "http://localhost:8080/api/product"
export const getAllProduct = async () => {
    try {
        const response = await axios.get(api)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}
export const storeProduct = async (product) => {
    await axios.post(api, product)
}

export const deleteProduct = async (id) => {
    await axios.delete(`${api}/${id}`)
}