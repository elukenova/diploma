import { useContext } from "react";
import "./OrderList.css";
import { AppContext } from "../../App";

export default function OrderList(){
  const { orders, products } = useContext(AppContext);

  if(!orders.length || !products.length){
    return "No orders found.";
  }
  // Выводим все заказы.
  const output = orders.map(order => {
    // Вывести содержимое корзины для этого заказа
    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);

      return (
        <div>
          <img src={product.picture} alt={product.name} />
          {product.name}: {order.cart[productId]} X {product.price} $ = {order.cart[productId] * product.price}  som;
        </div>
      );
    })

    return (
      <div className="Order">
        <div>Name: {order.name}</div>
        <div>Phone: {order.phone}</div>
        <div>Address: {order.address}</div>
        <div>Cart: {cartOutput}</div>
      </div>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}