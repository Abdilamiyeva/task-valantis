import { Route, Routes } from "react-router-dom";
import { Catalog } from './components/catalog/catalog';
import { Home } from "./components/home";

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/catalog" Component={Catalog} />
  </Routes>
);
