import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaycareList from "./pages/DaycareList/DaycareList";
import Header from "./components/Header/Header";
import AddDaycareItem from "./components/AddDaycareItem/AddDaycareItem";
import DaycareDetailPage from "./pages/DaycareDetailPage/DaycareDetailPage";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daycares" element={<DaycareList />} />
        <Route path="/profile/add" element={<AddDaycareItem />} />
        <Route path="/daycares/:id" element={<DaycareDetailPage />} />
        <Route path="/profile" element={<Signup />} />
        <Route path="/daycares/:id/:email" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
