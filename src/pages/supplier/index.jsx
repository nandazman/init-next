import Head from "next/head";
import ProgressSuplier from "../../components/Supplier/Dashboard/Progress";
import StatisticSupplier from "../../components/Supplier/Dashboard/Statistic";
import { LayoutSupplier } from "../../components/Supplier/Layout";

export default function supplierIndex() {
  return (
    <>
      <Head>
        <title>Supplier Page | Dashboard</title>
        <meta name="description" content="Dashboard untuk supplier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="pages-supplier-index">
        <LayoutSupplier>
          <ProgressSuplier className="mb-32px" />
          <StatisticSupplier className="mb-32px" />
        </LayoutSupplier>
      </div>
    </>
  );
}