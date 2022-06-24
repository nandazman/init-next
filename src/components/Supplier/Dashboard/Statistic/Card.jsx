export default function SupplierDashbordCard({ icon = <></>, label, value }) {
  return (
    <div className="bg-white flex justify-center items-center h-[180px] flex-grow gap-50px">
      <div>{icon}</div>
      <div>
        <p className="text-medium text-secondary">{label}</p>
        <h4 className="text-blue">{value}</h4>
      </div>
    </div>
  );
}