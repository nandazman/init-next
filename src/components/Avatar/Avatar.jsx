import Image from "next/image";

export default function Avatar({ name, role, src }) {
  return (
    <div className="flex gap-x-10px">
      <div>
        <Image className="rounded-full" width={40} height={40} alt="Avatar user" src={src} />
      </div>
      <div>
        <p className="text-normal-bold text-dark-blue">{name}</p>
        <p className="text-small text-secondary">{role}</p>
      </div>
    </div>
  );
}