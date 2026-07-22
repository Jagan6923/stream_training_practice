import React from 'react'
import axios from 'axios'


const Shop = () => {

    const [formData, setFormData] = React.useState({
        title: "",
        category: "",
        price: "",
        description: "",
        image: ""
    })

    const [products, setProducts] = React.useState([]);

    const uploadHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://fakestoreapi.com/products", {
                ...formData,
                price: Number(formData.price)
            });
            console.log(res.data);
            getData();
        } catch (error) {
            console.error("Failed to add product:", error);
        }
        setFormData({
            title: "",
            category: "",
            price: "",
            description: "",
            image: ""
        })
    }

    const getData = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    React.useEffect(() => {
        getData();
    }, [])


    return (
        <div className='container mt-5 shop'>
            <h1>Add product form</h1>
            <form action="" onSubmit={uploadHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                </select>

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>

                <label htmlFor="image">Image URL</label>
                <input type="url" id="image" name="image" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />

                <button type="submit">Submit</button>

            </form>


            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.title} width="100" />
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
