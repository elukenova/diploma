import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to="/">Home</Link>
      <Link to="MyPage">My Pge</Link>

      <Routes>
        <Route path="/" element={<h2>Hello World</h2>} />
        <Route path="MyPage" element={<h2>Bye World</h2>} />
      </Routes>
    </div>
  );
}

export default App;