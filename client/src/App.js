import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/templates/ProductDetail";
import All from "./pages/All";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";

function App() {
  return (
    <Routes>
    <Route path='/' element={<All />} />
    <Route path='/products/all' element={<All />} />
    <Route path='products/tech' element={<Tech />} />
    <Route path='products/clothes' element={<Clothes />} />
    <Route path='products/all/:id' element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
