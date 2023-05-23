import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="Product">
        <div className="productlist-image">
          <img src={product.picture} alt={product.name} />
        </div>

        <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
        <br />
        <span>{product.price} $</span>
        <span>
          <AddToCart product={product} />
        </span>
        <span>
          <DeleteProduct product={product} />
        </span>
      </div>
    ));
  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
