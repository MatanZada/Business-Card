import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUpBiz from "./components/SignUpBiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCard from "./components/CreateCard";
import MyCards from "./components/MyCards";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DeleteCard from "./components/DeleteCard";

function App() {
  return (
    <div className="app d-flex flex-column  min-vh-100">
      <ToastContainer />
      <Header />
      <main className="container flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route
            path="my-cards/create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-cards/delete-card/:id"
            element={
              <ProtectedRoute onlyBiz>
                <DeleteCard />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-cards"
            element={
              //A component that checks if the user is logged in. If not, it redirects to the signin page.
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />

          <Route
            path="signupBiz"
            element={<SignUpBiz redirect="my-cards/create-card" />}
          />

          <Route path="signup" element={<SignUp redirect="/signin" />} />
          <Route path="signin" element={<SignIn redirect="/" />} />
          <Route path="signout" element={<SignOut redirect="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
