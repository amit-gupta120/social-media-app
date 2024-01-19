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


function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <Rightbar />

        </div>

      </div>
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
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
