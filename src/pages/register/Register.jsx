// iimport React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Face App</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            magnam asperiores fuga nobis dolores, officiis praesentium veritatis
            unde quis, tenetur fugit ut nemo, aperiam ullam.
          </p>
          <span>Do you have an account?</span>

          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Name"/>



            <button>Register</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
