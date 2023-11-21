import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { auth } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import PageNotFound from "./pages/PageNotFound";
import { ProductStockChart } from "./components/api";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
            <Route path="/products" element={<Products user={user} setUser={setUser}/>} />
            <Route path="/analytics" element={<Analytics user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </>
        ) : (
          <Route path="/" element={<Login setUser={setUser} />} />
        )}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      // <>
      // <ProductStockChart/>
      // </>
  );
}

export default App;
