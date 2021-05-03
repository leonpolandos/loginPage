import React, { useState, useEffect } from 'react';
import Navbar from '../../molecules/NavBar/index';
import firebase from '../../../Config/Firabase/index';

const Dashboard = () => {

    const [productName, setproductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState([]);
    const [button, setButton] = useState('Save');
    const [selectedProduct, setSelectedProduct] = useState({})

    //Menggunakan useEffect untuk mengambil data dari realTime Database (product)
    useEffect(() => {
        firebase
        .database()
        .ref("products")
        //terdapat dua model yaitu .on (dipanggil saat terdapat sesuatu berubah) .once (melakukan perubahan)
        .once("value", (res) => {
            if (res.val()) {
                //Ubah menjadi array Object
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map((item) => {
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                });
                setProduct(productArr);
            }
        })
    })

    const alertShow = () => {
        alert("Your input is Saved to Realtime  Database");
    }


    const resetForm = () => {
        setproductName('');
        setCategory('');
        setPrice('');
        setButton("Save");
    }

    const onSubmit = () => {
        const data = {
            productName: productName,
            category: category,
            price: price
        };
        if (button === 'Save') {
            //Insert data
            firebase.database().ref("products").push(data);
        }else {
            //update Data
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);
            
        }
        resetForm();
    }

    const onUpdateData = (item) => {
        setproductName(item.productName);
        setCategory(item.category);
        setPrice(item.price);
        setButton("Update");
        setSelectedProduct(item);
    }

    const onDeleteData = (item) => {
        firebase.database().ref(`products/${item.id}`).remove();
    }

    return (
        <div className="container mt-5">
            <Navbar />
            <br />
            <h3>Dashboard</h3>
            <p>Product Name :</p>
            <input className="form-control" placeholder="Type Your Product Name" value={productName} onChange={(e) => setproductName(e.target.value)} />
            <p>Category</p>
            <input className="form-control" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <p>Price</p>
            <input className="form-control" placeholder="The price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <br/>
            <button className="btn btn-primary" onClick={onSubmit} type="button">{button}</button>
            {
                //Conditional Rendering
                button === "Update" && (<button className="btn btn-secondary" onClick={resetForm}>Cancel Update</button>)
            }

            <hr />

            <table className="table table-dark table-hover">
  ...           <thead>
                    <tr>
                        <th> Product Name </th>
                        <th> Category </th>
                        <th> Price </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Menngambil data pada productArr dan mengirimkannya ke tabel
                        product.map(item => (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                <button className="btn btn-success" onClick={() => onUpdateData(item)}>Edit</button> 
                                <button className="btn btn-danger" onClick ={() => onDeleteData(item)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
