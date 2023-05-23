import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import "../components/Pages.css/Product.css";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }
  console.log(product);
  return (
    <div className="Product-in">
      <h1>{product.name}</h1>
      <div className="product-image">
        {" "}
        <img src={product.picture} alt={product.name} className="product-img" />
      </div>
      <div className="product-text">
      <span>{product.price}$</span>
      <p>{product.description}</p>
      </div>
    </div>
  );
}
