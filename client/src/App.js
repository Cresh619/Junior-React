import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/templates/ProductDetail";
import ProductList from "./components/templates/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to = {"/all"}/>} />
      <Route path=":name" element={<ProductList />} />
      <Route path=":name/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
