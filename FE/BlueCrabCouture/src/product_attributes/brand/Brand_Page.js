import React from 'react'

export default function Brand_Page() {
    return (
        <div className='container'>
            <h1 className='text-center text-secondary text-uppercase'>Brand Management</h1>
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
                    <tr className='justify-content-center'>
                        <th scope="row">1</th>
                        <td>
                            <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-tumb.jpg" className="img-thumbnail border-0" alt="..." style={{ width: '100px' }} />
                        </td>
                        <td>Nike</td>
                        <td>
                            <button className='btn btn-outline-warning m-2'>Edit</button>
                            <button className='btn btn-outline-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
