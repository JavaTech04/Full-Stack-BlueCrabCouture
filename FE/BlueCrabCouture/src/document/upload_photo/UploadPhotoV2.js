import React, { useState } from 'react'

export default function UploadPhotoV2() {
    const [profileImage, setProfileImage] = useState()
    const [imagePreview, setImagePreview] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const uploadImage = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            let imageURL;
            if (
                profileImage && (
                    profileImage.type === "image/png" ||
                    profileImage.type === "image/jpg" ||
                    profileImage.type === "image/jpeg"

                )
            ) {
                const image = new FormData()
                image.append("file", profileImage)
                image.append("cloud_name", "dswqplrdx")
                image.append("upload_preset", "qh49wlsn")
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/dswqplrdx/image/upload",
                    {
                        method: "post",
                        body: image
                    }
                )
                const imageData = await response.json()
                imageURL = imageData.url.toString()
                setImagePreview(null)
            }
            alert(imageURL)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }
    return (
        <section className='flex-center'>
            <div className='container'>
                UploadPhotoV2
                <div className='card'>
                    <form onSubmit={uploadImage} className='form-control'>
                        <p>
                            <label>Phto: </label>
                            <input type='file' accept='image/png, image/jpeg' name='image'
                                onChange={handleImageChange} />
                        </p>
                        <p>
                            {
                                isLoading ? ("uploading...") :
                                    <button className='btn btn-primary' type='submit'>
                                        Upload Image
                                    </button>
                            }
                        </p>
                    </form>
                    <div className='profile-phto'>
                        {imagePreview && (
                            <img src={imagePreview && imagePreview} alt='Profile Image' />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
