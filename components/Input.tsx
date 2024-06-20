'use client'

import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
  });


export default function Input({label, placeholder, value, setValue}: any) {
    return (
        <div>
            <p className={poppins.className} style={{color: "#000", marginBottom: 10}}>{label}</p>
            <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} className={styles.placeholder} placeholder={placeholder}  style={{height: 40, width: "90%", borderRadius: 5, borderWidth: 1, fontSize: 14, fontWeight: "300", border: "1px solid rgba(0,0,0,0.15)", color: "#000", paddingLeft: 15, backgroundColor: "transparent"}} />
        </div>
    )
}

