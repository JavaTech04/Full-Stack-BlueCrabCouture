import React, { useEffect, useState } from 'react'
import { deleteProduct, getAllProduct } from '../API/ApiProduct'
import { Link } from 'react-router-dom'
export default function ViewProduct() {
    const [products, setProducts] = useState([])
    const loadProducts = async () => {
        const result = await getAllProduct()
        setProducts(result)
    }
    useEffect(() => {
        loadProducts()
    }, [])

    const handleDelete = async (pid) => {
        await deleteProduct(pid)
        loadProducts()
    }
    return (
        <div className='container'>
            <h1 className='text-secondary text-uppercase mb-3'>Product Manament</h1>
            <table className="table table-hover">
                <thead>
                    <tr className='table-secondary'>
                        <th scope="col">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.image.url} className="rounded mx-auto d-block image-table-product" alt="..." />
                                </td>
                                <td className='text-start'>{item.name}</td>
                                <td>{item.sold}</td>
                                <td>{item.createDate}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-outline-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
