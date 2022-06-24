import { LayoutSupplier } from "@/components/Layout/Supplier";
import Head from "next/head";

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
