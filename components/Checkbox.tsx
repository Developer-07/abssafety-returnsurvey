'use client'

import * as React from "react";
import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
  });


export default function Checkbox({label, placeholder, value, setValue, readOnly, checkRef}: any) {



    return (
        <div style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
            <input type="checkbox" ref={checkRef} checked={value} onClick={() => readOnly != true && setValue(!value)} className={styles.chbx} placeholder={placeholder} />
            <p className={poppins.className} style={{color: "#000"}}>{label}</p>
        </div>
    )
}

