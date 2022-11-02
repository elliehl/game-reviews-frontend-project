import "./Styles/App.css";
import Header from "./Header";
import Reviews from "./Reviews";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import IndividualReview from "./IndividualReview";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/:review" element={<IndividualReview />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
