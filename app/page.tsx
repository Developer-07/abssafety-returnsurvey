"use client"

import Image from "next/image";
import styles from "./page.module.css";
import TypeCard from "@/components/TypeCard";
import { Poppins } from "next/font/google";
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']  // Add the required weights
});

export default function Home() {
  var params = useSearchParams();
  const key = params.get('key');

  console.log("KEY: " + key);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <img src="abs.png" width={122} height={58} className="logo" />
        <p className={styles.typo}>Womit können wir Ihnen helfen?</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 100 }}>
        <TypeCard lock={key} id="product" icon="1" title="Produkt" text="Sie haben Probleme mit einem Produkt? Ihr Produkt ist defekt oder beschädigt? Wählen Sie diese Option" />
        <TypeCard lock={key} id="delivery" icon="2" title="Lieferung" text="Sie haben Probleme mit der Lieferung eines Produkts? Wurde ein Produkt falsch geliefert? Wählen Sie diese Option." />
        <TypeCard lock={key} id="return" icon="3" title="Rückgabe" text="Sie möchten ein Produkt zurückgeben, dass nicht mehr benötigt wird oder falsch bestellt wird? Wählen Sie diese Option." />
      </div>
    </main>
  );
}
