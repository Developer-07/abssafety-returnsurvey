'use client'

import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
  });

export default function TypeCard({icon, id, title, text, lock}: any) {
    const router = useRouter();

    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", gap: 20, width: 500, alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;", borderRadius: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {icon == 1 && (
                    <img src="tools.png" width={75} style={{marginTop: 50, marginBottom: 50}} height={75} />
                )}
                {icon == 2 && (
                    <img src="problems.png" width={75} style={{marginTop: 50, marginBottom: 50}} height={75} />
                )}
                {icon == 3 && (
                    <img src="return.png" width={75} style={{marginTop: 50, marginBottom: 50}} height={75} />
                )}

                <p className={poppins.className} style={{ fontSize: 36, fontWeight: "500", color: "#000" }}>{title}</p>
                <p className={poppins.className} style={{ fontSize: 16, color: "#000", textAlign: "center", marginTop: 20, width: "80%" }}>{text}</p>
            </div>

                <div style={{ width: "90%", height: 1, marginTop: 100, backgroundColor: "rgba(0,0,0,0.05)" }}></div>
                <div  style={{marginTop: 20, marginBottom: 30}}>
                <Button onPress={() => router.push("/dialog?type=" + id + "&key=" + lock)} text="Auswählen" />
                </div>
        </div>
    );

}