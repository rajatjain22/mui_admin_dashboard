import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectorRouter from "./Routers/ProtectorRouter";
import AuthRouter from "./Routers/AuthRouter";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectorRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
        </Route>
        <Route path="/auth" element={<AuthRouter />}>
          <Route index element={<Dashboard />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
