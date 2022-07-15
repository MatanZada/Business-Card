import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/common/PageHeader";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUpBiz from "./components/SignUpBiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app d-flex flex-column  min-vh-100">
      <ToastContainer />
      <Header />
      <main className="container flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<SignUp redirect="/signin" />} />
          <Route
            path="signupBiz"
            element={<SignUpBiz redirect="/create-card" />}
          />
          <Route path="signin" element={<SignIn redirect="/" />} />
          <Route path="signout" element={<SignOut redirect="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
