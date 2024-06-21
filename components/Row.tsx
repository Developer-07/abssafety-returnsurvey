'use client'

import * as React from "react";
import Button from "./Button";
import styles from "./typecard.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import Checkbox from "./Checkbox";
import Input from "./Input";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']  // Add the required weights
});


export default function Row({ label, placeholder, value, setValue, children, first, index }: any) {
    const [open, setOpen] = React.useState(first ? true : false);
    const [selected, setSelected] = React.useState(false);
    const [number, setNumber] = React.useState(value[index].articleNumber);
    const [numberOneVisible, setNumberOneVisible] = React.useState(false);
    const [numberTwoVisible, setNumberTwoVisible] = React.useState(false);
    const [numberThreeVisible, setNumberThreeVisible] = React.useState(false);
    const [serial, setSerial] = React.useState(value[index].serial);
    const [count, setCount] = React.useState(value[index].count);
    const [fullTicket, setFullTicket] = React.useState(false);

    const update = (identifier: any, val: any) => {
        // BRING TO WORK!

        if (identifier == "selected") {

            var selected = value.filter((article: any) => {
                return article.selected == true;

            }).length;

            if (length > 5) {
                setSelected(!selected);
                return;
            }
        }

        var thisRow = value[index];
        thisRow[identifier] = val;

        console.log(thisRow);

        setValue([...value.slice(0, index), thisRow, ...value.slice(index + 1)]);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%", }}>
            <div>
                <Checkbox value={selected} setValue={(val: any) => {update("selected", val);setSelected(val)}} />
            </div>
            <div style={{ display: "flex", width: 200, flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "flex-end"  }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-end"  }}>
                    <p style={{ color: "#000", display: numberOneVisible ? "none" : "flex" }}>{number}</p>
                    <Input noLabel hidden={numberOneVisible == false} placeholder={number} value={number} setValue={(val: any) => {setNumber(val);update("articleNumber", val)}} />
                </div>
                <Button icon text="edit" onPress={() => setNumberOneVisible(!numberOneVisible)} />
            </div>
            <div style={{ display: "flex", width: 200, flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-end" }}>
                    <p style={{ color: "#000", display: numberTwoVisible ? "none" : "flex" }}>{serial}</p>
                    <Input noLabel hidden={numberTwoVisible == false} placeholder={serial} value={serial} setValue={(val: any) => {setSerial(val);update("serial", val)}} />
                </div>
                <Button icon text="edit" onPress={() => setNumberTwoVisible(!numberTwoVisible)} />
            </div>
            <div style={{ display: "flex", width: 200, flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "flex-end" }}>
                <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 10, }}>
                    <p style={{ color: "#000", display: numberThreeVisible ? "none" : "flex" }}>{count}</p>
                    <Input type="number" min={0} noLabel hidden={numberThreeVisible == false} placeholder={count} value={count} setValue={(val: any) => {setCount(val);update("count", val)}} />
                </div>
                <Button icon text="edit" onPress={() => setNumberThreeVisible(!numberThreeVisible)} />
            </div>
        </div>
    )
}