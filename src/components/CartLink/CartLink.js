import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

export default function CartLink(){
  const {cart} = useContext(AppContext);

  //вычислить кол-во товаров
  const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
  );

  return(
    <div className="CartLink">
      <NavLink to="/cart">
        <img className="cart" src="https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png" alt="cart" />({total})
      </NavLink>
    </div>
  );
}