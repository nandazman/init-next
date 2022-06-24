import { Button } from "../Button/Button";
import ProgressBar from "./ProgreessBar";

export default function ProgressSuplier() {
  return (
    <div className="bg-white py-30px px-10px">
      <div className="w-[1000px] mx-auto">
        <div className="mb-30px">
          <h5 className="text-black mb-10px">Progress Toko Kamu</h5>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            feugiat.
          </p>
        </div>
        <ProgressBar className="mb-30px" progress="60" />
        <Button variant="blue" className="text-white block mx-auto">
          Atur Toko
        </Button>
      </div>
    </div>
  );
}