import { NavbarSupplier } from "../Navigation/Supplier";

export const LayoutSupplier = ({ children }) => {
  return (
    <>
      <NavbarSupplier />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};
