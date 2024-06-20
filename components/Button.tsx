'use client'

import styles from "./typecard.module.css";

export default function Button({text, style, onPress}: any) {
    return (
        <button onClick={onPress} className={styles.button} style={{height:40, fontFamily: "Poppins", backgroundColor: "#B5181D", paddingLeft: 50, paddingRight: 50, borderRadius: 5, borderWidth: 0, fontSize: 14, fontWeight: "500", cursor: "pointer"}}>
            {text}
        </button>
    )
}