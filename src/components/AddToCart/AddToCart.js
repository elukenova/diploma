import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
export default function AddToCart({product}){
  const {cart, setCart}=useContext(AppContext)

  function onAddToCartClick(){
    setCart({
      ...cart, //положить текущее содержание корзинки
      [product.id]: 1 //добавить текущий товар
    });

  }

  return(
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>Add to cart</button>
    </div>
  );
}