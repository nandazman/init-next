import Navigation from "../Navigation/Navigation";

export const LayoutAdmin = ({ children }) => {
  return (
    <>

      <Navigation />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
