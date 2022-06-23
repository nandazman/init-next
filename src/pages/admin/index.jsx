import { Button } from "@/components/Button/Button";
import { ButtonPurple } from "@/components/Button/ButtonPurple";
import { LayoutAdmin } from "@/components/Layout/Admin";
import { Modal } from "@/components/Modal/Modal";

export default function Admin() {
  return (
    <div data-testid="page-admin-dashboard">
      <LayoutAdmin>
        <h1 className="text-identity">H1 Hello world</h1>
        <h2>H2 LALALA</h2>
        <p className="text-button bg-green">HMMMM</p>
        <ButtonPurple>haha</ButtonPurple>
        <Button>haha</Button>
        <Modal show>
          <h1 className="text-identity">HALO HAHA</h1>
        </Modal>
      </LayoutAdmin>
    </div>
  );
}
