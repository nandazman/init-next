import WalletIcon from "@/components/Icon/Wallet";
import SupplierDashbordCard from "./Card";

export default function WalletCardSupplier() {
  return (
    <SupplierDashbordCard
      icon={<WalletIcon />}
      label="Saldo Kamu"
      value="Rp80.321.343"
    />
  );
}