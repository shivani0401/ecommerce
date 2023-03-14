import { useLocation, useParams, Link } from "react-router-dom";
import products from "../Home/product.json";
import { useState } from "react";
export default function HomeProdDesc() {
    const location = useLocation();
    console.log("props", location);
    const params = useParams();
    const [cartItems, setCartItems] = useState({});
    const handleAddtocart=()=>{
        const item = { prod, quantity: 1 };
        function addItem(item) {
            setCartItems([...cartItems, item]);
          }
        addItem(item);

        alert("item added to cart")
    }
    const prod = products.find((p) => p.id === params.productId);
    return (
        <div key={params.id}>
            <Link to={location.state ? location.state.from : "/"}>
                <span>back</span>
            </Link>
            <h1>{prod.title}</h1>
            <img alt={prod.title} src={prod.image} width="200" />
            <p>{prod.description}</p>
            <b>Price: {prod.price}</b>
            <button class="addtocart" type="submit" onClick={handleAddtocart}>Add to cart</button>

        </div>
    )
}