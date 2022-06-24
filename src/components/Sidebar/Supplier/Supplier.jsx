import MenuSidebarSupplier from "./Menu";

export default function SupplierSidebar() {
  return (
    <div
      className="sticky left-0 bg-white w-250 overflow-y-auto overscroll-none no-scrollbar pl-20px pr-40px pb-50px pt-40px top-0"
      style={{ height: "calc(100vh - 77px)" }}
    >
      <MenuSidebarSupplier />
    </div>
  );
}