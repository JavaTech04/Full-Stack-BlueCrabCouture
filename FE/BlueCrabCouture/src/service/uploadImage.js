import axios from "axios";
export const uploadImage = async (image) => {
    try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/dswqplrdx/image/upload", image)
        return response.data.url;
    } catch (error) {
        console.log(error)
        throw error
    }
}