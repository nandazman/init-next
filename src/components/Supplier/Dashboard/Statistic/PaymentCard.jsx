import BagIcon from "@/components/Icon/Bag";
import SupplierDashbordCard from "./Card";

export default function PaymentCardSupplier() {
  return (
    <SupplierDashbordCard
      icon={<BagIcon />}
      label="Pembelanjaan Hari ini"
      value="Rp80.321.343"
    />
  );
}
