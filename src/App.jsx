import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectorRouter from "./Routers/ProtectorRouter";
import AuthRouter from "./Routers/AuthRouter";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectorRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/auth" element={<AuthRouter />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
