import React, { useState } from 'react';
import data from "../assets/Products.json";
import { Product } from '../Product/Product';
import './Home.css';

const categories = [
  "All",
  "Electronics",
  "Vehicles",
  "Fashion",
  "Home & Living",
  "Groceries",
  "Sports",
  "Beauty",
  "Accessories"
];

export const Home = ({cart, setCart}) => {
    const [products, setProducts] = useState(data);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filterProducts = (category) => {
        setSelectedCategory(category);
        
        if (category === "All") {
            setProducts(data);
            return;
        }

        const filtered = data.filter(product => {
            const name = product.name.toLowerCase();
            switch(category) {
                case "Electronics":
                    return name.match(/iphone|samsung|oppo|vivo|macbook|airpods|camera/i);
                case "Vehicles":
                    return name.match(/charger|touring|motorcycle|sportbike/i);
                case "Fashion":
                    return name.match(/watch|shoes|dress|skirt|frock|jewellery|earring/i);
                case "Home & Living":
                    return name.match(/lamp|frame|bed|spoon|kitchen|grater|sieve|tray/i);
                case "Groceries":
                    return name.match(/food|strawberry|kiwi|chicken|fish|coffee|oil|potatoes/i);
                case "Sports":
                    return name.match(/cricket|golf|tennis|ball|volleyball/i);
                case "Beauty":
                    return name.match(/mascara|nail polish/i);
                case "Accessories":
                    return name.match(/case|stick|glasses|battery/i);
                default:
                    return true;
            }
        });
        setProducts(filtered);
    };

    return (
        <div>
            <h1 className='title'>Products</h1>
            <div className="categories-container">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => filterProducts(category)}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-container">
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        product={product} 
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
};