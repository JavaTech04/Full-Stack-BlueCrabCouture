import React, { useState } from 'react'

export default function Upload_Multiple() {
    const [images, setImages] = useState([])
    const handleChange = (e) => {
        const newImages = [...images];
        for (let i = 0; i < e.target.files.length; i++) {
            newImages.push(URL.createObjectURL(e.target.files[i]));
        }
        setImages(newImages);
    }

    const handleRemove = (index) => {
        //--------------Handle Input When Remove File------------//
        const inputElement = document.getElementById('image');
        const fileList = inputElement.files;
        const fileListArray = Array.from(fileList);
        fileListArray.splice(index, 1);
        const newList = new DataTransfer();
        fileListArray.forEach(file => newList.items.add(file));
        inputElement.files = newList.files;
        //-----------------End---------------//
        const listImages = [...images]
        listImages.splice(index, 1)
        setImages(listImages)
    }
    return (
        <div className='text-center m-3'>
            Upload_Multiple
            <input type='file' className='form-control' multiple id='image' name='image' onChange={handleChange} />
            {/* <button className='btn btn-secondary' onClick={() => { console.log(images); }}>Console log</button> */}
            <div className='row m-3'>
                {
                    images.map((item, index) => (
                        <div className='col-3' key={index}>
                            <button type="button" className="btn-close" onClick={() => handleRemove({ index })}></button>
                            <img className='img-thumbnail' style={{ width: 100 }} src={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
