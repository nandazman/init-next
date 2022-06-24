import NotificationIcon from "@/components/Icon/Notification";
import MenuItem from "./MenuItem";

export default function MenuSidebarSupplier() {
  return (
    <div className="flex flex-col">
      <MenuItem href="/supplier" text="Notifikasi" icon={<NotificationIcon />} />
    </div>
  );
}