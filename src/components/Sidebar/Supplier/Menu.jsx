import HomeIcon from "@/components/Icon/Home";
import NotificationIcon from "@/components/Icon/Notification";
import MenuItem from "./MenuItem";

const menu = [
  {
    href: "/supplier",
    text: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    href: "/supplier/notification",
    text: "Notifikasi",
    icon: <NotificationIcon />,
  },
  {
    href: "/supplier/link",
    text: "Link",
  },
  {
    href: "/supplier/chat",
    text: "Chat",
  },
  {
    href: "/supplier/store",
    text: "Toko",
  },
  {
    href: "/supplier/email",
    text: "Email Marketing",
  },
  {
    href: "/supplier/order",
    text: "Order",
  },
  {
    href: "/supplier/product",
    text: "Produk",
  },
  {
    href: "/supplier/coupon",
    text: "Kupon",
  },
  {
    href: "/supplier/customer",
    text: "Customer",
  },
  {
    href: "/supplier/statistic",
    text: "Statistik",
  },
  {
    href: "/supplier/review",
    text: "Ulasan",
  },
  {
    href: "/supplier/settings",
    text: "Pengaturan",
  },
];

export default function MenuSidebarSupplier() {
  return (
    <div className="flex flex-col">
      {menu.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </div>
  );
}