import "../components/Pages.css/Delivery.css";
export default function Delivery() {
  return (
    <div className="Delivery">
      <h2>Shipping and Delivery</h2>
      <div className="Shipping">
        <h3>Shipping Time and Rules</h3>
        <p>Shipment times for each product vary depending on availability. The estimated shipping time is shown for each product when you place an order at  If your order includes several products, the estimated shipping time will depend on the product that will take the longest. We do not separate orders, nor do we separate combo products and ship them before the estimated shipping time. If you want to receive products individually as soon as they are available, please order them separately.</p>
      </div>
      <div className="Delivery-text">
        <h2>Delivery and Shipping Fee</h2>
        <div className="Shipping fee"></div>
        <h3>Shipping Services</h3>
        <p>Orders from North America will be 
          shipped by FedEx, UPS or DHL. We are unable to ship to PO Boxes. Due to air transportation restrictions, it is recommended to purchase no more than two batteries per order. For orders from areas such as Alaska, Hawaii, or the central mountainous regions, delivery time will be slightly longer.</p>
      </div>
      <div className="payment">
        <div className="car" >
          <img src="https://stormsend1.djicdn.com/stormsend/uploads/45344040-98af-0136-3de3-12528100fbe3/truck-moving.svg" alt="delivery-car"/>
          <p>Free shipping on orders over <br/>USD $149 </p>
        </div>
        <div className="card" >
          <img src="https://stormsend1.djicdn.com/stormsend/uploads/48b0bc00-98af-0136-ac46-1237445f15bc/credit-card.svg" alt="delivery-card"/>
          <p>We accept credit cards, <br />PayPal, and bank wires</p>
        </div>
        <div className="reviews" >
          <img src="https://stormsend1.djicdn.com/stormsend/uploads/4b8c3060-98af-0136-ac47-1237445f15bc/comment-alt-smile.svg" alt="delivery-reviews"/>
          <p>Order Service: Live Chat</p>
        </div>
      </div>

    </div>
  )
}