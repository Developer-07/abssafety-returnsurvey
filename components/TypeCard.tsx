import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
  });

export default function TypeCard() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", gap: 20, width: 500, alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;", borderRadius: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src="tools.png" width={75} style={{marginTop: 50, marginBottom: 50}} height={75} />
                <p className={poppins.className} style={{ fontSize: 36, fontWeight: "500", color: "#000" }}>Produkt</p>
                <p className={poppins.className} style={{ fontSize: 16, color: "#000", textAlign: "center", marginTop: 20, width: "80%" }}>Sie haben Probleme mit einem Produkt? Ihr Produkt ist defekt oder beschädigt? Wählen Sie diese Option</p>
            </div>

                <div style={{ width: "90%", height: 1, marginTop: 100, backgroundColor: "rgba(0,0,0,0.05)" }}></div>
                <div  style={{marginTop: 20, marginBottom: 30}}>
                <Button  text="Auswählen" />
                </div>
        </div>
    );

}