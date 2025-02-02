import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";



function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      </FavoritesProvider>
  );
}

export default App;
