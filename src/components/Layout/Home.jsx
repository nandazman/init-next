import { NavbarHome } from "../Navigation/Home";

export const LayoutHome = ({ children }) => {
  return (
    <>
      <NavbarHome />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};
