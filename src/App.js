import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Delivery from "./Pages/Delivery";
import New from "./Pages/New";
import Category from "./Pages/Category";
import NotFound from "./Pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import {
  categoryCollection,
  onAuthChange,
  ordersCollection,
  productsCollection,
} from "./firebase";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import ThankYou from "./Pages/ThankYou";
import Orders from "./Pages/Orders";

//Создать контекстб который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  //контекст для корзины
  cart: {}, //садержимое корзинки
  setCart: () => {}, //изменить садержимое корзинки

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setCategories(
          // обнавить состаяние
          docs.map((doc) => ({
            //новый массив
            ...doc.data(), // из свойство name, slug
            id: doc.id, // и свойства id
          }))
        );
      });
    getDocs(productsCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обнавить состаяние
          docs.map((doc) => ({
            //новый массив
            ...doc.data(), // из свойство name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(ordersCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setOrders(
          // обнавить состаяние
          docs.map((doc) => ({
            //новый массив
            ...doc.data(), // из свойство name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<New />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
