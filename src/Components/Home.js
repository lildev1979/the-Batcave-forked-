import "./Home.css";
import Board from "./LightsOut/Board";
export default function Home() {
  return (
    <div className="Home">
      <h1 className="Home-Title">Lets Play : </h1>

      <Board />
    </div>
  );
}
