import React from 'react'

export default function Upload_Multiple() {
    const handleChange = (e) => {
        for (var i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i]);
        }
    }
    return (
        <div>
            Upload_Multiple
            <input type='file' multiple name='image' onChange={handleChange} />
            <img src='https://res.cloudinary.com/dswqplrdx/image/upload/v1714281768/mdg1vmpjviggnal45xqc.png' />    
        </div>
    )
}
