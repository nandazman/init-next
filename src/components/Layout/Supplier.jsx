import { NavbarSupplier } from "../Navigation/Supplier";
import SupplierSidebar from "../Sidebar/Supplier/Supplier";

export const LayoutSupplier = ({ children }) => {
  return (
    <>
      <NavbarSupplier />

      <div className="bg-background relative flex">
        <SupplierSidebar />
        <main className="py-40px pl-20px pr-30px min-h-screen">{children}</main>
      </div>
    </>
  );
};
