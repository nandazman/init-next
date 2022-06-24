import { NavbarSupplier } from "../Navigation/Supplier";

export const LayoutSupplier = ({ children }) => {
  return (
    <>
      <NavbarSupplier />
      <div className="min-h-screen bg-background">
        <main>{children}</main>
      </div>
    </>
  );
};
