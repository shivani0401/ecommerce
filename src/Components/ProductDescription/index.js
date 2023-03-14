import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles.css';
export default function ProductDescription() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const { productId } = params;
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [productId])
    console.log(product.description)
    return (
        <div>
            <h2>{product.title}</h2>
            <div className="productItem">
                <img className="img" src={product.image} alt={product.title} width="300px" />
                <p className="id">{product.id}</p>
                <p className="title">{product.title}</p>
                <p className="description">{product.description}</p>
                <b className="price">Price: {product.price} $</b>
                <p className="discountPercentage">{product.discountPercentage}</p>
                <button class="addtocart" type="submit">Add to cart</button>

            </div>
        </div>
    )
}