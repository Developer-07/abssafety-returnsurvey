import Image from "next/image";
import styles from "./page.module.css";
import TypeCard from "@/components/TypeCard";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.header}>
        <img src="abs.png" width={122} height={58} className="logo" />
        <p className={styles.typo}>Womit können wir Ihnen helfen?</p>
     </div>
     <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 100}}>
      <TypeCard />
      <TypeCard />
      <TypeCard />
     </div>
    </main>
  );
}
