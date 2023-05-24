import "./Cell.css";

export default function Cell({ isActive, handleClick, locationX, locationY }) {
  return (
    <div
      className={`CELL ${isActive ? "Active" : ""}`}
      onClick={() => handleClick(locationX, locationY)}
    ></div>
  );
}
