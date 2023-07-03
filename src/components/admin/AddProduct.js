import React, { useState, useEffect } from 'react';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [disc, setDisc] = useState('');
    const [price, setPrice] = useState('');
    const [catagory, setCatagory] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [images, setImages] = useState([]);

    //fatch data



    //upload data

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('disc', disc);
        formData.append('price', price);
        formData.append('catagory', catagory);

        try {
            const response = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    authorization: JSON.parse(localStorage.getItem("token"))
                }
            });

            if (response.ok) {
                setMessage('Product uploaded successfully!');
                setTitle('');
                setDisc('');
                setPrice('');
                setCatagory('');
                setFile(null);

            } else {
                const data = await response.json();
                setMessage(data.error || 'An error occurred while uploading the image.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the image.');
        }
        console.log(images[1])
    };

    return (


        <div className='container text-left text-black'>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Product Discription</label>
                    <input onChange={(e) => setDisc(e.target.value)} type="text" className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" />

                </div>


                <label className="form-label">Product Catagory</label>
                <select onChange={(e) => setCatagory(e.target.value)} className="form-control">
                    <option selected>Select Catagory</option>
                    <option value="man" >Man</option>
                    <option value="woman">Woman</option>
                    <option value="kids" >Kids</option>
                </select>



                <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary">Upload</button>

                {message && <p>{message}</p>}
            </form>

        </div>



    );
}

export default AddProduct;
