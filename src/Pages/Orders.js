import OrderList from "../components/OrderList/OrderList";
import "../components/Pages.css/Orders.css";

export default function Orders() {
  return (
    <div className="Orders">
      <h1>Orders</h1>
      <OrderList />
    </div>
  )
}