import "./App.css";
import MyNavbar from "./pages/MyNavbar.js";
import ExamSyllabus from "./pages/ExamSyllabus.js";
import CourseEligibility from "./pages/CourseEligibility";
import Counselling from "./pages/Counselling";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Feedback from "./pages/Feedback";
import MyRegistration from "./pages/MyRegistration";
import AppLogin from "./pages/AppLogin";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<AppLogin />} />
          <Route path="/login" element={<AppLogin />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/ExamSyllabus" element={<ExamSyllabus />} />
          <Route path="/CourseEligibility" element={<CourseEligibility />} />
          <Route path="/Counselling" element={<Counselling />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/registration" element={<MyRegistration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
