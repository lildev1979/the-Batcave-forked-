import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import "./Main.css";
// this component wraps the Nav on every route forthwith;
export default function Main() {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
}
