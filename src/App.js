import './App.css';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Navbar from './Components/navBar/Navbar.jsx';
import LeftBar from './Components/leftBar/LeftBar.jsx';
import Rightbar from './Components/rightBar/Rightbar.jsx';
import Profile from './pages/profile/Profile.jsx';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext.js';
import { AuthContext } from './context/authContext.js';


function App() {


  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`} >
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <Rightbar />

        </div>

      </div >
    )
  }

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />

    }
    return children;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),

      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]


    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App ">
      {/* <Login /> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
