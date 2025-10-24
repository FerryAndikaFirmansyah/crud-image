import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //statement
        load();
    }, []);
    const load = async () => {
        const res = await axios.get('http://localhost:3000/products')
        setProducts(res.data)
        console.log(res.data);
    }
    const handleDelete = async (id) => {
        if (confirm('Are u sure want to delete?')) {
            await axios.delete(`http://localhost:3000/products/${id}`)
            load();
        }
    }
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between mb-3">
                    <h2>Regist Product</h2>
                    <Link to="/add">Add Product</Link>
                </div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.image &&
                                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${p.image}`}
                                        alt={p.name}
                                        width={80}
                                    />}
                                </td>
                                <td>
                                    <Link to={`/edit/${p.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                                    <button
                                        onClick={() => handleDelete(p.id)}
                                        className="btn btn-sm btn-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}