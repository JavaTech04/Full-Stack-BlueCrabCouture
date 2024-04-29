import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { findColorById, updateColor } from '../../API/ApiColor'
import swal from 'sweetalert'

export default function Color_Edit() {
    const navigate = useNavigate()
    const [color, setColor] = useState()
    const { id } = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const colorUpdate = { ...color, name: data.name, colorCode: data.colorCode }
        try {
            await updateColor(colorUpdate)
            navigate("/attributes/color")
            swal("Good job!", "Successfully", "success");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadColor()
    }, [])
    const loadColor = async () => {
        const response = await findColorById(id)
        document.getElementById('colorCode').value = response.colorCode
        document.getElementById('name').value = response.name
        setColor(response)
    }
    return (
        <div className='container'>
            <h1 className='text-secondary text-uppercase'>Update Color</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='row justify-content-center'>
                <div className='col-6'>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" id="name" className="form-control" {...register("name", { required: true })} />
                        {errors.name && <div className="form-text text-danger">Please don't leave this field blank.</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input type="color" className="form-control" id='colorCode' {...register("colorCode")} />
                    </div>
                    <div className='justify-content-center'>
                        <button type='submit' className='btn btn-outline-success'>Submit</button>
                        <Link to='/attributes/color' className='btn btn-danger m-2'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div >
    )
}
