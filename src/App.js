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
import { categoryCollection } from "./firebase";

//Создать контекстб который будет хранить данные.
export const AppContext = createContext({
  categories: [],
})

function App() {
  const [categories, setCategories]= useState([]);

  useEffect(() => {// выполнить только однажды
    return getDocs(categoryCollection)// получить категории
    .then((docs) => { // когда категории загрузились
      setCategories( // обнавить состаяние
        docs.map(doc =>({ //новый массив
          ...doc.data(), // из свойство name, slug
          id: doc.id // и свойства id
        }))
      )
    });
  }, []);


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/categories/:slug" element={<Category />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;