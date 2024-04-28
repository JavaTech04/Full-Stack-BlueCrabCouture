import React, { useContext } from 'react'
import { FullNameContext } from '../../context/FullNameContext'

export default function ContextAPI_Demo() {
    const contex = useContext(FullNameContext)
    return (
        <div className='container'>
            <h1>Hi! I'm <p>{contex.fullName}</p></h1> {/* Call context to use */}
        </div>
    )
}
