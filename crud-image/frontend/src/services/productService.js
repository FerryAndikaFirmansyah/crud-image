import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/products'
})

export const fetchProducts = () => api.get('/')
export const fetchProduct = (id) => api.get(`/${id}`)
//create product
export const createProduct = (data) => api.post('/', data, {
    'Content-Type': 'multipart/form-data'
})
//update product
export const updateProduct = (id, data) => {
    api.put(`/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
//delete product
export const deleteProduct = (id) => api.delete(`${id}`)