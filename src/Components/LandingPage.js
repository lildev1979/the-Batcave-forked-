import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="LandingPage-BackGround"></div>
      <div className="LandingPage-Body">
        <div className="LandingPage-Center">
          <h1 className="LandingPage-Message">Welcome to the BatCave</h1>
          <Link to="/home" className="LandingPage-Button">
            Enter
          </Link>
        </div>
      </div>
    </>
  );
}
