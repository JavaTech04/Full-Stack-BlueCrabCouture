import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAllUserAccount, findUserAccountById } from '../API/ApiService'
import { storeProduct } from '../API/ApiProduct'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
export default function AddProduct() {
    const [previewImage, setPreviewImage] = useState("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")
    const [users, setUsers] = useState([])
    const [imageUpload, setImageUpload] = useState()
    const [isUpload, setIsUpload] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const loadUser = async () => {
        const result = await getAllUserAccount()
        setUsers(result)
    }
    useEffect(() => {
        loadUser()
    }, [])
    const handleChange = (e) => {
        setImageUpload(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }
    const onSubmit = async (data) => {
        setIsUpload(true)
        const image = new FormData()
        image.append("file", imageUpload)
        image.append("cloud_name", "dswqplrdx")
        image.append("upload_preset", "qh49wlsn")
        const response = await axios.post("https://api.cloudinary.com/v1_1/dswqplrdx/image/upload", image)
        const result = {
            code: data.code,
            name: data.name,
            idImage: {
                url: response.data.url
            },
            idUserAccount: await findUserAccountById(data.user)
        }
        await storeProduct(result)
        navigate("/product")
        swal("Good job!", "Successfully", "success");
    }
    return (
        <div className='container'>
            <h1 className='text-secondary mb-3 text-uppercase'>New Product</h1>
            <div className='text-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='row'>
                    <div className='col-9'>
                        <div className="form-floating mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="code"
                                style={{ width: '200px' }}
                                {...register("code", { required: true })}
                            />
                            <label htmlFor="code">Code</label>
                        </div>
                        {errors.code && <small>This field is required</small>}
                        <div className="form-floating mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                {...register("name", { required: true })}
                            />
                            <label htmlFor="name">Product name</label>
                        </div>
                        {errors.name && <small>This field is required</small>}
                        <div className="form-floating mb-3 mt-3">
                            <select className="form-select" {...register("user", { required: true })}>
                                <option defaultChecked={true} >User [Demo]</option>
                                {
                                    users.map((item) => (
                                        <option key={item.id} value={item.id}>{item.phoneNumber}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='col-3 text-center'>
                        <img src={previewImage}
                            style={{ width: '100%' }} className="img-thumbnail" alt="..." />
                        <p className='mt-2'>
                            <input
                                {...register("photo", { required: true })}
                                type='file' name='image' className='form-control form-control-sm'
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                    <div>
                        {
                            isUpload ?
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> :
                                <div>
                                    <button type='submit' className='btn btn-outline-success m-3'>Submit</button>
                                    <Link to="/product" className='btn btn-outline-danger'>Cancel</Link>
                                </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
