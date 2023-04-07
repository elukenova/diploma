import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Delivery from "./Pages/Delivery";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;