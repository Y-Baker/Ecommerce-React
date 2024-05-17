import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
import Products from "../product/products";

const Home = () => {
    const { products } = useContext(ProductContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(products);

    const getCategories = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCategories(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="overflow-hidden">
            <h1>Home</h1>
            <div className="flex flex-wrap justify-center">
                {categories.map((category) => (
                    <div className="m-2 p-2 bg-gray-200 rounded-lg" key={category}>
                        <Products category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
