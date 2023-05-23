import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart, //положить текущее содержание корзинки
      [product.id]: qty, //добавить текущий товар
    });
  }

  return (
    <div className="AddToCart">
      <span className="total">{cart[product.id] ? cart[product.id] : 0}</span>
      <br className="center" />
      <button className="btn-cart" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
