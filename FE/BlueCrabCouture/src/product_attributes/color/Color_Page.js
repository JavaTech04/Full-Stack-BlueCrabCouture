import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteColor, getAllColors } from '../../API/ApiColor'

export default function Color_Page() {
    const [colors, setColors] = useState([])

    useEffect(() => {
        loadColors()
    }, [])

    const loadColors = async () => {
        const result = await getAllColors()
        setColors(result)
    }
    const handleRemove = async (id) => {
        await deleteColor(id)
        loadColors()
    }
    return (
        <div className='container'>
            <div className='text-center mb-3'>
                <h1 className='text-secondary text-uppercase'>Color Management</h1>
                <Link to='/attributes/color/create' className='text-center h5'>New Color</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Color</th>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        colors.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <input className='border-0' disabled type='color' value={item.colorCode} />
                                </td>
                                <td>{item.colorCode}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`/attributes/color/edit/${item.id}`} className='btn btn-outline-warning m-2'>Edit</Link>
                                    <button className='btn btn-outline-danger' onClick={() => handleRemove(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
