import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { deleteBrand, findBrand, getAllBrand, storeBrand, updateBrand } from '../../API/ApiBrand'
import swal from 'sweetalert'

export default function Brand_Page() {
    const [privewImage, setPrivewImage] = useState()
    const [imageUpload, setImageUpload] = useState()
    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState()
    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm()
    useEffect(() => {
        loadBrands()
    }, [])
    const loadBrands = async () => {
        const result = await getAllBrand()
        setBrands(result)
    }
    const handlePost = async (data) => {
        const image = new FormData()
        image.append("file", imageUpload)
        image.append("cloud_name", "dswqplrdx")
        image.append("upload_preset", "qh49wlsn")
        const response = await axios.post("https://api.cloudinary.com/v1_1/dswqplrdx/image/upload", image)
        const result = {
            urlLogo: response.data.url,
            name: data.name
        }
        try {
            // console.log(result);
            await storeBrand(result)
            swal("Good job!", "Successfully", "success");
            loadBrands()
            setImageUpload()
        } catch (error) {
            throw error
        }
    }
    const onChangeImage = (e) => {
        setImageUpload(e.target.files[0])
        setPrivewImage(URL.createObjectURL(e.target.files[0]))
    }
    const onDelete = async (id) => {
        await deleteBrand(id)
        loadBrands()
    }
    const onEdit = async (id) => {
        const result = await findBrand(id)
        setPrivewImage(result.urlLogo)
        setBrand(result)
        resetInputFile()
        // console.log(result);
    }
    const resetInputFile = () => {
        const input = document.getElementById('brand-file');
        input.value = ''; // Xóa giá trị của input file
    };
    const handleUpdate = async () => {
        const brand_file = document.getElementById('brand-file');
        const brand_name = document.getElementById('brand-name');
        // console.log(brand_file.value);
        let response = undefined;
        if (imageUpload) {
            const image = new FormData()
            image.append("file", brand_file.files[0])
            image.append("cloud_name", "dswqplrdx")
            image.append("upload_preset", "qh49wlsn")
            response = await axios.post("https://api.cloudinary.com/v1_1/dswqplrdx/image/upload", image)
            console.log("exists a file!");
        }
        const result = {
            id: brand.id,
            urlLogo: response === undefined ? brand.urlLogo : response.data.url,
            name: brand_name.value,
            createDate: brand.createDate
        }
        console.log(result);
        console.log("Error update");
        // try {
        //     // console.log(result);
        //     await updateBrand(result)
        //     swal("Good job!", "Update successfully", "success");
        //     loadBrands()
        // } catch (error) {
        //     throw error
        // }
        setBrand()
    }
    return (
        <div className='container'>
            <h1 className='text-center text-secondary text-uppercase'>Brand Management</h1>
            <div className='text-center'>
                {privewImage && <img src={privewImage} style={{ width: '100px' }} className="img-thumbnai" alt="..." />}
            </div>
            <form onSubmit={handleSubmit(handlePost)} className='row text-start m-5'>
                <div className='col-4'>
                    <input
                        className="form-control"
                        type="file"
                        onChange={onChangeImage}
                        id='brand-file'
                    />
                </div>
                <div className='col-6'>
                    <input type="text" id="brand-name" className="form-control" placeholder="Brand name" {...register("name", { required: true })}
                        value={brand && brand.name}
                        onChange={e => setBrand(e.target.value)} />
                </div>
                <div className='col-2'>
                    <button type='submit' className='btn btn-secondary m-2'>Create</button>
                    {brand && <button onClick={() => handleUpdate()} type='button' className='btn btn-warning'>Update</button>}
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brands.map((item, index) => (
                            <tr key={index} className='justify-content-center'>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.urlLogo} className="img-thumbnail border-0" alt="..." style={{ width: '60px' }} />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => onEdit(item.id)} className='btn btn-outline-warning m-2'>Edit</button>
                                    <button onClick={() => onDelete(item.id)} className='btn btn-outline-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
