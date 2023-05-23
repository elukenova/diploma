import OrderForm from "../components/OrderForm/OrderForm";
import CartList from "../components/CartList/CartList";
import "../components/Pages.css/CartDisplay.css";

export default function Cart(){
  return(
    <div className="Cart">
      <h1>Cart</h1>
      <CartList />
      <OrderForm />
    </div>
    
  )
}
