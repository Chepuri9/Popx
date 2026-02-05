import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/popx-illustration.svg";
import "./landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper">
      <div className="mobile-card">
        <img src={illustration} alt="PopX" className="hero-img" />

        <h3>Welcome to PopX</h3>
        <p className="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button className="primary-btn" onClick={() => navigate("/register")}>
          Create Account
        </button>

        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
