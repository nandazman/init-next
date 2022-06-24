import { LayoutSupplier } from "@/components/Layout/Supplier";
import ProgressSuplier from "@/components/Progress/ProgressSuplier";
import Head from "next/head";

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
          <ProgressSuplier />
        </LayoutSupplier>
      </div>
    </>
  );
}