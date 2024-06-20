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


export default function Accordion({ label, placeholder, value, setValue, children, first }: any) {
    const [open, setOpen] = React.useState(first ? true : false);

    return (
        <div>
            <button style={{
                background: "none", border: "none", display: "flex", flexDirection: "row", gap: 10, alignItems: "center"
            }}
            onClick={() => setOpen(!open)}
            >
                <img src="curved/chevron-down.png" style={{marginBottom: 10, transform: open ? "" : "rotate(270deg)"}} width={24} height={24} />
                <p className={poppins.className} style={{ color: "#000", marginBottom: 10, fontSize: 20, }}>{label}</p>
            </button>
            <div style={{paddingLeft: 30, display: open ? "flex" : "none", flexDirection: "column", gap: 30, marginTop: 20}}>
                {children}
            </div>
        </div>
    )
}