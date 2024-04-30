import axios from "axios"
const api = "http://localhost:8080/api/brand"

export const getAllBrand = async () => {
    try {
        const respnse = await axios.get(api)
        return respnse.data
    } catch (error) {
        throw error
    }
}
export const findBrand = async (id) => {
    try {
        const respnse = await axios.get(`${api}/${id}`)
        return respnse.data
    } catch (error) {
        throw error
    }
}


export const storeBrand = async (brand) => {
    try {
        await axios.post(api, brand)
    } catch (error) {
        throw error
    }
}

export const updateBrand = async (brand) => {
    try {
        await axios.put(api, brand)
    } catch (error) {
        throw error
    }
}
export const deleteBrand = async (id) => {
    try {
        await axios.delete(`${api}/${id}`)
    } catch (error) {
        throw error
    }
}