import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const Layout = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
);
