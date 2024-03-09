import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { CatalogPage } from "./pages/catalog/catalog";
import CatalogSinglePage from "./pages/catalog/catalog-single/catalog-single";


export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/catalog/:id" element={<CatalogSinglePage />} />
  </Routes>
);
