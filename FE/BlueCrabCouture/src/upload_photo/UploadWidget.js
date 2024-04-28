import { useEffect, useRef, useState } from "react"
const UploadWidget = () => {
    const [url, setUrl] = useState()
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dswqplrdx',
            uploadPreset: 'qh49wlsn'
        }, function (error, result) {
            if (result.info.secure_url !== undefined) {
                console.log("Url: ", result.info.secure_url);
                setUrl(result.info.secure_url)
            }

        })
    }, [])
    return (
        <div>
            <button className="btn btn-success" onClick={() => widgetRef.current.open()}>
                Upload V1
            </button>
            <br />
            <img src={url} width="500px" className="mt-5 border" />
            <br />
            <a href={url}>{url}</a>
        </div>
    )
}
export default UploadWidget