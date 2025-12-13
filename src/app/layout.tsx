import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
  return (
    <div className="pb-20">
      <Header />
      <Outlet />
    </div>
  );
}
