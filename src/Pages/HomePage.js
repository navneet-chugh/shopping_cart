import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const HomePage = () =>{

    const [items, setItems] = useState(null);
    // const dispatch = useDispatch();

    useEffect(() => {
      fetchData();
    }, [])

    async function fetchData() {
      try {
          const response = await axios.get("https://dummyjson.com/products");
          console.log(response.data.products);
          setItems(response.data.products)
      }
      catch (err) {
          console.log(err);
      }
    }

    return(
        <div className="page-setting">
            <p className="heading">All Items</p>
            <div className="cards-div">
              {items &&
              items.map((product) => (
              <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </div>
    )
}

export default HomePage;