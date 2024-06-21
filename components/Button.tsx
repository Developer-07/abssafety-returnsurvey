'use client'

import styles from "./typecard.module.css";

export default function Button({text, style, onPress, icon}: any) {
    return (
        <button onClick={onPress} className={styles.button} style={{height:40, padding: icon ? 15 : 0, fontFamily: "Poppins", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "#B5181D", paddingLeft: icon ? 7 : 50, paddingRight: icon ? 7 : 50, borderRadius: 5, borderWidth: 0, fontSize: 14, fontWeight: "500", cursor: "pointer"}}>
            {
                text == "edit" ? (
                    <img src="edit.png" width={26} height={26} style={{}} />
                ) : text
            }

        </button>
    )
}