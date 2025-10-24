import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductForm() {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        //statement
        if (id) {
            axios.get(`http://localhost:3000/products/${id}`).then(res => {
                setName(res.data.name)
            })
        }
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        if (file) formData.append('image', file)
        if (id) {
            await axios.post(`http://localhost:3000/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } else {
            await axios.post(`http://localhost:3000/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
        navigate('/')
    }

    return (
        <>
            <div className='container mt-4'>
                <h2>{id ? 'Edit product' : 'Add Product'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name Product</label>
                        <input type='text'
                            className='form-control'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Pict Product</label>
                        <input type='file'
                            className='form-control'
                            onChange={e => setFile(e.target.files[0])}
                        />
                    </div>
                    <button type='submit' className='btn btqn-success'>Simpan</button>
                </form>
            </div>
        </>
    )
}