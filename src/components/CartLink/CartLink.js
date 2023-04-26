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
        <img className="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRLBGLoj4Zk5O1Z-ArmkczsWxbuPJAPT5QA&usqp=CAU" alt="cart" />({total})
      </NavLink>
    </div>
  );
}