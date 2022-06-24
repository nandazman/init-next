import PaymentCardSupplier from "./Statistic/PaymentCard";
import WalletCardSupplier from "./Statistic/WalletCard";

export default function StatisticSupplier({ className }) {
  return (
    <div className={className}>
      <div className="mb-16px">
        <h5 className="text-black mb-10px">Statistik Toko Kamu</h5>
        <p className="text-primary mb-10px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna luctus
          cras maecenas in lacus a id.
        </p>
        <p className="text-primary">
          Update :{" "}
          <span className="font-bold">20 September 2021 17:23 WIB</span>
        </p>
      </div>
      <div className="flex justify-between gap-x-32px mb-28px">
        <WalletCardSupplier />
        <PaymentCardSupplier />
      </div>
    </div>
  );
}
