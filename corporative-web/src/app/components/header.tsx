import styles from "@/app/styles/layout.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
