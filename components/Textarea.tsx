'use client'

import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
  });


export default function Textarea({label, placeholder, value, setValue}: any) {
    return (
        <div>
            <p className={poppins.className} style={{color: "#000", marginBottom: 10}}>{label}</p>
            <textarea placeholder={placeholder} onChange={(ev) => setValue(ev.target.value)} className={styles.placeholder} style={{height: 100, width: "90%", borderRadius: 5, borderWidth: 1, paddingTop: 15, fontSize: 14, fontWeight: "300", border: "1px solid rgba(0,0,0,0.15)", color: "#000", paddingLeft: 15, backgroundColor: "transparent"}}>{value}</textarea>
        </div>
    )
}

