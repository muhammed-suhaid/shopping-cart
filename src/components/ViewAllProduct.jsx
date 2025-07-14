import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllProduct = () => {
    const [productData, changeProductData] = useState(
        []
    )

    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{changeProductData(response.data)})
        .catch()
    }

    useEffect(()=>{fetchData()},{})

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            {productData.map((data, index) => {
                                return (<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={data.image} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{data.title}</h5>
                                            <p class="card-text">{data.category}</p>
                                            <h6 class="card-title">Price : ₹{data.price}</h6>
                                            <p class="card-text">⭐{data.rating.rate} ({data.rating.count} reviews)</p>
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct