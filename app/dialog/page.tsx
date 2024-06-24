'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from "@/components/Input";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import Accordion from "@/components/Accordion";
import Dropdown from "@/components/Dropdown";
import Row from "@/components/Row";
import Checkbox from "@/components/Checkbox";

export default function Dialog() {
    const screenHeight = ScreenHeight();
    const screenWidth = ScreenWidth();

    const [page, setPage] = useState(0);
    var params = useSearchParams();
    const key = params.get('key');
    const type = params.get('type');
    const [articles, setArticles] = useState<any>([{ serial: "KWX83JKF", articleNumber: "775KVS", count: 1, documentNumber: "123"}]);
    const [selectedArticles, setSelectedArticles] = useState(0);
    const router = useRouter();

    const [customerNumber, setCustomerNumber] = useState("12345");
    const [companyName, setCompanyName] = useState("test");
    const [street, setStreet] = useState("Hubertusstraße 138");
    const [city, setCity] = useState("Kevelaer 47623");
    const [salutation, setSalutation] = useState("Frau");
    const [salutionOptions, setSalutionOptions] = useState([{ value: "Herr", label: "Herr" }, { value: "Frau", label: "Frau" }])
    const [firstName, setFirstName] = useState("test");
    const [lastName, setLastName] = useState("test");
    const [phoneNumber, setPhoneNumber] = useState("test");
    const [endCustomer, setEndCustomer] = useState("test");
    const [documentNumber, setDocumentNumber] = useState("test");
    const [wholeTicket, setWholeTicket] = useState(true);
    const [note, setNote] = useState("test");

    const createTicket = async () => {

        var plz = city.replace(/\D/g, '');
        var streetNumber = street.replace(/\D/g, '');
        var cityName = city.replace(/[0-9]/g, '');
        var streetName = street.replace(/[0-9]/g, '');

        var requestTypeId = 46;
        if (type == "product") {
            requestTypeId = 46;
        }
        if (type == "delivery") {
            requestTypeId = 45;
        }
        if (type == "return") {
            requestTypeId = 44;
        }

        var salutionID = "10132";
        if (salutation == "Herr") {
            salutionID = "10132";
        }
        if (salutation == "Frau") {
            salutionID = "10131";
        }

        var selectedArticles = articles.filter((article: any) => article.selected == true);
        var length = selectedArticles.length;

        if (wholeTicket) {
            length = 0;
        }

        var body = {
            fields: {
                project: {
                    key: "RMA"
                },
                summary: "Dies ist ein Test vom Praktikant!",
                description: "Ticket",
                customfield_10024: requestTypeId.toString(),
                customfield_10080: cityName,
                customfield_10059: companyName,
                customfield_10078: plz,
                customfield_10079: streetName + " " + streetNumber,
                customfield_10206: parseFloat(customerNumber),
                customfield_10065: phoneNumber,
                customfield_10074: firstName,
                customfield_10075: lastName,
                customfield_10082: note,
                customfield_10077: documentNumber,
                customfield_10144: endCustomer,
                customfield_10073: {
                    "id": salutionID.toString()
                },
                issuetype: {
                    id: "10049"
                },
            }
        }

        for (var i = 0; i < length; i++) {
            if (wholeTicket) {
                break;
            }

            var article = selectedArticles[i];

            if (i == 0) {
                body.fields["customfield_10205"] = parseFloat(article.documentNumber);
                body.fields["customfield_10088"] = article.articleNumber;
                body.fields["customfield_10092"] = parseFloat(article.count);
                body.fields["customfield_10120"] = article.serial;
            }

            if (i == 1) {
                body.fields["customfield_10207"] = parseFloat(article.documentNumber);
                body.fields["customfield_10089"] = article.articleNumber;
                body.fields["customfield_10093"] = parseFloat(article.count);
                body.fields["customfield_10121"] = article.serial;
            }

            if (i == 2) {
                body.fields["customfield_10208"] = parseFloat(article.documentNumber);
                body.fields["customfield_10094"] = article.articleNumber;
                body.fields["customfield_10097"] = parseFloat(article.count);
                body.fields["customfield_10122"] = article.serial;
            }
            
            if (i == 3) {
                body.fields["customfield_10209"] = parseFloat(article.documentNumber);
                body.fields["customfield_10095"] = article.articleNumber;
                body.fields["customfield_10098"] = parseFloat(article.count);
                body.fields["customfield_10123"] = article.serial;
            }

            if (i == 4) {
                body.fields["customfield_10210"] = parseFloat(article.documentNumber);
                body.fields["customfield_10096"] = article.articleNumber;
                body.fields["customfield_10099"] = parseFloat(article.count);
                body.fields["customfield_10124"] = article.serial;
            }
        }

        const response = await fetch("https://proxy.mauritzlemgen.de/proxy", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "X-Atlassian-Token": "no-check",
                "Target": "https://abssafety.atlassian.net/rest/api/2/issue",
                Authorization: 'Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD',
            },
            body: JSON.stringify(body),
            redirect: 'follow'
        })


        console.log(response)
        const data = await response.json();
        console.log(data);
    }


    const createArticle = () => {
        const newArticles = [...articles];
        newArticles.push({});
        setArticles(newArticles);
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
                    <Input label="Straße & Hausnummer" value={street} setValue={setStreet} placeholder="Musterstraße 12" />
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
                    <Dropdown label="Anrede" value={salutation} setValue={setSalutation} options={salutionOptions} placeholder="Herr" />

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
                    <Textarea label="Bemerkung" value={note} setValue={setNote} placeholder="Das Produkt ist mir einfach runtergefallen" />
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
                        <Checkbox label="Ganzer Auftrag" value={wholeTicket} setValue={(val: any) => setWholeTicket(val)}></Checkbox>
                    </div>
                    <hr style={{ borderColor: "rgba(0,0,0,0.15)", borderRadius: 15, width: "90%" }}></hr>
                    <div style={{ display: wholeTicket ? "none" : "flex", }}>
                        <Button text="Artikel hinzufügen" onPress={() => createArticle()} />

                    </div>
                    <div style={{ display: wholeTicket ? "none" : "flex", flexDirection: "column", gap: 30, overflowY: "auto", overflowX: "hidden", maxHeight: "50vh" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%", }}>
                        <div>
                            <p style={{color: "#000"}}></p>
                        </div>
                        <div>
                            <p style={{color: "#000", fontWeight: "600"}}>Artikelnummer</p>
                        </div>
                        <div>
                            <p style={{color: "#000", fontWeight: "600"}}>Seriennummer</p>
                        </div>
                        <div>
                            <p style={{color: "#000", fontWeight: "600"}}>Anzahl</p>
                        </div>
                        <div>
                            <p style={{color: "#000", fontWeight: "600"}}>Belegnummer</p>
                        </div>
                    </div>
                        {articles.map((article: any, index: any) => {
                            return (
                                <Row selectedArticles={selectedArticles} article={article} setSelectedArticles={setSelectedArticles} label={(index + 1) + ". Artikel"} index={index} value={articles} setValue={setArticles} first={index == 0}></Row>
                            )
                        })}

                    </div>
                    <p style={{display: wholeTicket ? "none" : "flex", color: "#000" }}>{selectedArticles} / 5</p>
                    <div style={{ display: "flex", flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>

                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#fff", width: 12, height: 12, border: "1px solid rgba(0,0,0,0.15)", borderRadius: 50 }} />
                            <div style={{ backgroundColor: "#B5181D", width: 12, height: 12, borderRadius: 50 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20, alignSelf: "flex-end", alignItems: "center", marginRight: "10%" }}>
                            <Button text="Zurück" onPress={() => { setPage(page - 1) }} />
                            <Button text="Ticket erstellen" onPress={() => { createTicket() }} />
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
