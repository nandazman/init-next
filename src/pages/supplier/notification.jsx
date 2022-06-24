import Head from "next/head";
import { LayoutSupplier } from "../../components/Supplier/Layout";

export default function supplierIndex() {
  return (
    <>
      <Head>
        <title>Supplier Page | Notifikasi</title>
        <meta name="description" content="Notifikasi untuk supplier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="pages-notification-index">
        <LayoutSupplier>Notifikasi</LayoutSupplier>
      </div>
    </>
  );
}
