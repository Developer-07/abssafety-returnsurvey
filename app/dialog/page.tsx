'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from "@/components/Input";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import Accordion from "@/components/Accordion";

export default function Dialog() {
    const screenHeight = ScreenHeight();
    const screenWidth = ScreenWidth();

    const [page, setPage] = useState(0);
    const [type, setType] = useState("");
    const [articles, setArticles] = useState<any>([{}]);
    const router = useRouter();

    const [customerNumber, setCustomerNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [salutation, setSalutation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [endCustomer, setEndCustomer] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");
    const [note, setNote] = useState("");


    useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;

        // Parse the URL to get query parameters
        const urlParams = new URLSearchParams(currentUrl);
        const t: any = urlParams.get('type'); // Assuming 'type' is the query parameter
        if (type == "") {
            setType(t);
        }
        // Example usage
        console.log('Type:', t);
    }, []);


    const createTicket = async () => {
        const ticket = {
            customerNumber: customerNumber,
            companyName: companyName,
            street: street,
            city: city,
            salutation: salutation,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            endCustomer: endCustomer,
            documentNumber: documentNumber,
            note: note,
            articles: articles
        }

        const body = JSON.stringify({
            "fields": {
                "project": {
                    "key": "ITT"
                },
                "summary": "Ticket",
                "description": "Ticket",
                "issuetype": {
                    "name": "Task",
                    "id": "10116"
                },
            }
        });
        const response = await fetch("https://abssafety.atlassian.net/rest/api/2/issue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD',
                
            },
        })
        console.log(response)
        const data = response.json();
        console.log(data);
    }



    return (
        <main className={styles.main}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <img src="abs.png" width={122} height={58} className="logo" />
                    <p className={styles.typo}>-Support</p>
                </div>
                <div style={{ display: page == 0 ? "flex" : "none", flexDirection: "column", gap: 30 }}>
                    <Input label="Kundennummer" value={customerNumber} setValue={setCustomerNumber} placeholder="ABC-123" />
                    <Input label="Firmenname" value={companyName} setValue={setCompanyName} placeholder="Max Mustermann GmbH" />
                    <Input label="Straße & Hausnummer" value={street} setValue={setStreet}  placeholder="Musterstraße 12" />
                    <Input label="PLZ & Ort" value={city} setValue={setCity} placeholder="12345 Musterhausen" />
                    <div style={{ display: "flex", flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                            <div style={{ backgroundColor: "#B5181D", width: 12, height: 12, borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20, alignSelf: "flex-end", alignItems: "center", marginRight: "10%" }}>
                            <Button text="Zurück" onPress={() => { router.replace("/") }} />
                            <Button text="Weiter" onPress={() => { setPage(page + 1) }} />
                        </div>
                    </div>
                </div>
                <div style={{ display: page == 1 ? "flex" : "none", flexDirection: "column", gap: 30 }}>
                    <Input label="Anrede" value={salutation} setValue={setSalutation} placeholder="Herr" />
                    <Input label="Vorname" value={firstName} setValue={setFirstName} placeholder="Max" />
                    <Input label="Nachname" value={lastName} setValue={setLastName} placeholder="Mustermann" />
                    <Input label="Telefonnummer" value={phoneNumber} setValue={setPhoneNumber} placeholder="+123 123123123123" />
                    <Input label="Firmenname Endkunde" value={endCustomer} setValue={setEndCustomer} placeholder="Max Mustermann GmbH" />
                    <div style={{ display: "flex", flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>

                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} /><div style={{ backgroundColor: "#B5181D", width: 12, height: 12, borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20, alignSelf: "flex-end", alignItems: "center", marginRight: "10%" }}>
                            <Button text="Zurück" onPress={() => { setPage(page - 1) }} />
                            <Button text="Weiter" onPress={() => { setPage(page + 1) }} />
                        </div>
                    </div>
                </div>
                <div style={{ display: page == 2 ? "flex" : "none", flexDirection: "column", gap: 30 }}>
                    <Input label="Belegnummer (Packzettel, Lieferschein etc.)" value={documentNumber} setValue={setDocumentNumber} placeholder="ABC-123" />
                    <Textarea label="Bemerkung" value={note} setValue={setNote}  placeholder="Das Produkt ist mir einfach runtergefallen" />
                    <div style={{ display: "flex", flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>

                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} /><div style={{ backgroundColor: "#B5181D", width: 12, height: 12, borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20, alignSelf: "flex-end", alignItems: "center", marginRight: "10%" }}>
                            <Button text="Zurück" onPress={() => { setPage(page - 1) }} />
                            <Button text="Weiter" onPress={() => { setPage(page + 1) }} />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", visibility: page == 3 ? "visible" : "hidden", flexDirection: "column", gap: 30 }}>
                    <div>
                        <Button text="Artikel hinzufügen" onPress={() => setArticles(articles => [...articles, {}])} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 30, overflowY: "auto", overflowX: "hidden", maxHeight: "60vh" }}>
                        {articles.map((article: any, index: any) => {
                            return (
                                <Accordion label={(index + 1) + ". Artikel"} first={index == 0}>
                                    <Input label="Artikelnummer" placeholder="ABC-123" value={article.articleNumber} setValue={(value: any) => {
                                        const newArticles = [...articles];
                                        newArticles[index].articleNumber = value;
                                        setArticles(newArticles);
                                    }} />
                                    <Input label="Chargen- oder Seriennummer" placeholder="ABC-123" value={article.serial} setValue={(value: any) => {
                                        const newArticles = [...articles];
                                        newArticles[index].serial = value;
                                        setArticles(newArticles);
                                    }} />
                                    <Input label="Anzahl" placeholder="8" value={article.count} setValue={(value: any) => {
                                        const newArticles = [...articles];
                                        newArticles[index].count = value;
                                        setArticles(newArticles);
                                    }} /> 
                                    <div>
                                        <Button text="Artikel entfernen" onPress={() => setArticles(articles.filter((_: any, i: any) => i !== index))} /></div>
                                </Accordion>
                            )
                        })}
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>

                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#B5181D", width: 12, height: 12, borderRadius: 50 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20, alignSelf: "flex-end", alignItems: "center", marginRight: "10%" }}>
                            <Button text="Zurück" onPress={() => { setPage(page - 1) }} />
                            <Button text="Ticket erstellen" onPress={() => { createTicket()}} />
                        </div>
                    </div>
                </div>


            </div>
            <div className={styles.right}>
                <img src="imageI.png" width={screenWidth / 2.5} height={screenHeight} />
            </div>
        </main>
    )
}



function ScreenHeight() {
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        // Function to update the screen height
        const updateScreenHeight = () => {
            setScreenHeight(window.innerHeight);
        };

        // Update the screen height on mount
        updateScreenHeight();

        // Add an event listener to update the screen height on resize
        window.addEventListener('resize', updateScreenHeight);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenHeight);
        };
    }, []);

    return screenHeight;
}
function ScreenWidth() {
    const [ScreenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Function to update the screen height
        const updateScreenHeight = () => {
            setScreenWidth(window.innerWidth);
        };

        // Update the screen height on mount
        updateScreenHeight();

        // Add an event listener to update the screen height on resize
        window.addEventListener('resize', updateScreenHeight);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenHeight);
        };
    }, []);

    return ScreenWidth;
}
