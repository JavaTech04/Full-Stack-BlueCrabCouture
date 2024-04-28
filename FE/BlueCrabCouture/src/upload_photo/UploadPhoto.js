import React from 'react'
import UploadWidget from './UploadWidget'
import UploadPhotoV2 from './UploadPhotoV2'
import Upload_Multiple from './Upload_Multiple'

export default function UploadPhoto() {
    return (
        <div className='container'>
            <h1 className='h1 text-center'>Upload Photo</h1>
            <UploadWidget />
            <UploadPhotoV2 />
            <Upload_Multiple />
        </div>
    )
}
