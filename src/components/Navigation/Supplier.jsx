import Avatar from "../Avatar/Avatar";
import { Logo } from "../Icon/Logo";
import NotificationIcon from "../Icon/Notification";

export const NavbarSupplier = () => {
  return (
    <nav className="relative bg-[#FCFCFC] py-15px px-20px flex justify-between items-center">
      <span className="cursor-pointer">
        <Logo />
      </span>
      <div className="w-[250px] flex gap-x-20px items-center">
        <NotificationIcon />
        <Avatar
          name="John Doe"
          role="Supplier"
          src="https://storage.googleapis.com/smarketing-staging/instructor/As ilustrações do artista “Derek Laufman”.jpg"
        />
      </div>
    </nav>
  );
};
