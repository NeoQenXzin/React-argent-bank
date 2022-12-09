import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import User from "./pages/User";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route
            path="*"
            element={
              <div className="error-404">
                Error404 <br></br> <Link to="/">Retourner à l'accueil</Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
