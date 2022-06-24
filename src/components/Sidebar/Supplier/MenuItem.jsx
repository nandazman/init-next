import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./MenuItem.module.scss";

export default function MenuItem({ text, href, icon }) {
  const [active, setActive] = useState(false);
  const { asPath, isReady } = useRouter();

  useEffect(() => {
    if (isReady && asPath === href) {
      setActive(true);
    }
  }, [asPath, isReady, href]);

  return (
    <Link href={href}>
      <a
        className={cn(
          {
            [styles.active]: active,
          },
          styles.menu
        )}
      >
        <span className="w-24px">{icon}</span>
        <span className="">{text}</span>
      </a>
    </Link>
  );
}
