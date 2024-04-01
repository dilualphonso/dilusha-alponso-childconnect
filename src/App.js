import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaycareList from "./pages/DaycareList/DaycareList";
 import DaycareSearch from "./components/DaycareSearch/DaycareSearch";
import Header from "./components/Header/Header";
import AddDaycareItem from "./components/AddDaycareItem/AddDaycareItem";
import DaycareDetailPage from "./pages/DaycareDetailPage/DaycareDetailPage"
import Signup from "./pages/Signup/Signup";
import { useEffect, useState } from "react";
import Comments from "./components/Comments/Comments";
import ReviewList from "./pages/ReviewList/ReviewList";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  const [comments, setComments] = useState([]);
  const[meanValue, setMeanValue] = useState(0)


  // useEffect(() => {
  //   const calculateMeanRating = () => {
  //     if (comments.length === 0) {
  //       return 0; // To avoid division by zero
  //     }
  //     const totalRating = comments.reduce((accumulator, comment) => {
  //       return accumulator + comment.rating;
  //     }, 0);

  //     return totalRating / comments.length;
  //   };

  //   const meanRating = calculateMeanRating();
  //   setMeanValue(meanRating);
  //   console.log(meanRating)
  // }, [comments]);

    return (

      <BrowserRouter>

<Header/>



        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/daycares" element={<DaycareList comments={comments} setComments={setComments} meanValue={meanValue}/>} />
          <Route path="/daycares/add" element={< AddDaycareItem/>} />
          <Route path="/daycares/:id" element={<DaycareDetailPage comments={comments} setComments={setComments} meanValue={meanValue}/>} />
          <Route path="/signup" element={<Signup />} />

        </Routes>

      </BrowserRouter>

    );
  }

  export default App;
