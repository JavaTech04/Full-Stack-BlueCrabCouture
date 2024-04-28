import React, { useContext } from 'react'
import { FullNameContext, FullNameProvider } from '../../context/FullNameContext'


export default function ContextAPI() {
    const context = useContext(FullNameContext)//Declare context
    // console.log(context);
    return (
        <div>
            <h1>Context API</h1>
            <input className="form-control" defaultValue={context.fullName} onChange={context.handleChange} />
            {
                context.fullName && <p className='text-center'>{context.fullName}</p>
            }
        </div>
    )
}
