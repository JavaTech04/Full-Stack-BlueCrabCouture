import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { storeColor } from '../../API/ApiColor'
import swal from 'sweetalert'

export default function Color_New() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            console.log(data);
            await storeColor(data)
            navigate("/attributes/color")
            swal("Good job!", "Successfully", "success");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <h1 className='text-secondary text-uppercase'>New Color</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='row justify-content-center'>
                <div className='col-6'>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" {...register("name", { required: true })} />
                        {errors.name && <div id="emailHelp" className="form-text text-danger">Please don't leave this field blank.</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input type="color" className="form-control" {...register("colorCode")} />
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
