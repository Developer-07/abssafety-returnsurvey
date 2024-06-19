import styles from "./typecard.module.css";

export default function Button({text, style}: any) {
    return (
        <button style={{height:40, backgroundColor: "#B5181D", width: 220, borderRadius: 5, borderWidth: 0, fontSize: 14, fontWeight: "500", cursor: "pointer"}}>
            {text}
        </button>
    )
}