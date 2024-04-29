import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteUserAccount, getAllUserAccount } from '../API/ApiService';

export default function ViewUser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = async () => {
        const result = await getAllUserAccount()
        setUsers(result);
    }
    const handleDelete = async (uid) => {
        await deleteUserAccount(uid)
        loadUsers()
    }
    return (
        <div className='container'>
            <div className='py-4'>
            </div><table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.userAccountDetail ? item.userAccountDetail.name : <p className='text-danger'>Not found!</p>}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.idUserRole.id === 1 ? <span className="badge text-bg-success">{item.idUserRole.roleName}</span> : <span className="badge text-bg-primary">{item.idUserRole.roleName}</span>}</td>
                                <td>
                                    <Link to={`/user/edit/${item.id}`} className='btn btn-warning m-2'>Edit</Link>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
