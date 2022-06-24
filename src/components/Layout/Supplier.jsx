import { NavbarSupplier } from "../Navigation/Supplier";
import SupplierSidebar from "../Sidebar/Supplier";

export const LayoutSupplier = ({ children }) => {
  return (
    <>
      <NavbarSupplier />

      <div className="min-h-screen bg-background flex">
        <SupplierSidebar />
        <main className="py-40px pl-20px pr-30px">{children}</main>
      </div>
    </>
  );
};
