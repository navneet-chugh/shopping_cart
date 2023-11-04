import { useDispatch} from "react-redux";
import {add_to_cart} from "../actions/shoppingAction";

const ProductCard = ({ product }) =>{

    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={product.thumbnail} />
            </div>
            <div className="product-details">
                <p>Title : {product.title} </p>
                <p>Price :  ${product.price} </p>
            </div>
            <button className="btn" onClick={() => {
                dispatch(add_to_cart(product))
                alert("Item has been Added!")
            }}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;