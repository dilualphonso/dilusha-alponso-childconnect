import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaycareList from "./pages/DaycareList/DaycareList";
 import DaycareSearch from "./components/DaycareSearch/DaycareSearch";
import Header from "./components/Header/Header";
import AddDaycareItem from "./components/AddDaycareItem/AddDaycareItem";

function App() {
    return (

      <BrowserRouter>

<Header/>
<DaycareSearch/>


        <Routes>
          <Route path="/" element={<DaycareList/>} />
          <Route path="/daycare/add" element={< AddDaycareItem/>} />

        </Routes>

      </BrowserRouter>

    );
  }

  export default App;
