import Link from "next/link";
import styles from "./page.module.scss";
export default function Page() {
  return (
    <div className={styles.Home}>
      <Link href="/vendors">Go to Vendors List</Link>
    </div>
  );
}
