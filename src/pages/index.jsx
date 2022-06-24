import { Button } from "@/components/Button/Button";
import { ButtonPurple } from "@/components/Button/ButtonPurple";
import { LayoutHome } from "@/components/Layout/Home";
import { Modal } from "@/components/Modal/Modal";
import Head from 'next/head';

export default function Home() {
  return (
    <div data-testid="page-index">
      <LayoutHome>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-identity">H1 Hello world</h1>
        <h2>H2 LALALA</h2>
        <p className="bg-green">HMMMM</p>
        <ButtonPurple>haha</ButtonPurple>
        <Button>haha</Button>
        <Modal show>
          <h1 className="text-identity">HALO HAHA</h1>
          <Button variant="red">haha</Button>
        </Modal>
      </LayoutHome>
    </div>
  );
}
