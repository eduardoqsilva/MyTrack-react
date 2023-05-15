import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Default() {
  return (
    <>
      <Logo/>
      <Outlet />
    </>
  )
}