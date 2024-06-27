'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "@/public/loading.json"

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
    const [articles, setArticles] = useState<any>([]);
    const [selectedArticles, setSelectedArticles] = useState(0);
    const router = useRouter();

    const [customerNumber, setCustomerNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [salutation, setSalutation] = useState("Herr");
    const [salutionOptions, setSalutionOptions] = useState([{ value: "Herr", label: "Herr" }, { value: "Frau", label: "Frau" }])
    const [sectionOptions, setSectionOptions] = useState([{ value: "Arbeitsvorbereitung", label: "Arbeitsvorbereitung" }, { value: "Auftragsbearbeitung", label: "Auftragsbearbeitung" }, { value: "Montage", label: "Montage" }, { value: "Qualitätssicherung", label: "Qualitätssicherung",} , { value: "Vertrieb", label: "Vertrieb" }])
    const [selectedSection, setSelectedSection] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [endCustomer, setEndCustomer] = useState("");
    const [email, setEmail] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");
    const [wholeTicket, setWholeTicket] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("");

    const loadingMessages = [
        "Kaffee holen... Möchtest du auch einen?",
        "Wir stellen sicher, dass die Pixel gerade stehen...",
        "Umm... Ladehaken suchen, bitte warten!",
        "Bremsen für die Werbepause!",
        "Lade... Lade... Lade... Wer hat die Datei vergessen?",
        "Entpacken des Internets... Das kann eine Weile dauern.",
        "Zauberhafte Einhörner werden vorbereitet...",
        "Entknoten der Datenleitungen...",
        "Lade... Lade... Lade... immer noch besser als das nächste Update von Visual Studio!",
        "Katzenvideos sortieren...",
        "Hamster im Rad ist müde, Ersatz wird geladen...",
        "Virtuellen Kaffee einschenken...",
        "Die Software zählt Schafe... fast fertig...",
        "Internet-Roaming... Bitte die Möwen füttern...",
        "Warten auf grünes Licht von der ISS...",
        "Die Kaffeepause dauert an, bitte warten...",
        "Wird geladen... Pizza bestellen?",
        "Die Datenzwerge sind am Werk...",
        "Bit-Feen tanzen...",
        "Server streicheln...",
        "Virtuelle Enten im Teich zählen...",
        "Die Datenbanane wird geschält...",
        "Einhornstaub wird gesammelt...",
        "Kabel werden sortiert...",
        "Daten-Pinguine in der Antarktis werden befragt...",
        "Der Ladebalken wird gefüttert...",
        "Künstliche Intelligenz denkt nach...",
        "Tee kochen, bitte warten...",
        "Die Datenelfen sind noch nicht fertig...",
        "Ein Pixel nach dem anderen..."
    ]

    const fetchPositions = async () => {
        try {
            const response = await fetch("https://slui-server.absturzsicherung.de:3001/Documents/" + key + "/Positions?Items=0", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();

            var positions = data.map((position: any) => {
                if (position.PositionKind == "A" || position.PositionKind == "H") {
                    return {
                        serial: "",
                        articleNumber: position.ArticleNumber,
                        count: position.Quantity,
                        documentNumber: position.DocumentNumber,
                        postionNumber: position.PositionNumberText
                    }
                }
            })
            positions = positions.filter((position: any) => position != null && position != undefined);

            positions = positions.sort((a: any, b: any) => {
                return a.postionNumber - b.postionNumber;
            })


            setArticles(positions)




            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
            
        } catch (error) {
            console.log(error);
        }
    }

    const fetchContactPerson = async (customerKey: any, contactPersonKey: any) => {
        try {
            const response = await fetch("https://slui-server.absturzsicherung.de:3001/Customer/ContactPerson?customerKey=" + customerKey + "&contactPersonKey=" + contactPersonKey, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();

            var firstName = data.FirstName;
            var lastName = data.LastName;
            var salutation = data.Salutation;
            var telephoneNumber = data.Contact.TelephoneNumber1;
            var email = data.Contact.EMail1;

            setFirstName(firstName ? firstName : "");
            setLastName(lastName ? lastName : "");
            setEmail(email ? email : "")
            setSalutation(salutation ? salutation : "");
            setPhoneNumber(telephoneNumber ? telephoneNumber : "");

            console.log(data);

            fetchPositions();
        } catch (error) {
            fetchPositions();
            console.log(error);
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch("https://slui-server.absturzsicherung.de:3001/Documents/" + key, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();

            if (data.BusinessPartner == null) {
                data.BusinessPartner = {};
            }

            if (data.DeliveryAddress == null) {
                data.DeliveryAddress = {};
            }

            var customerNumber = data.BusinessPartner.ReferenceAddressNumber;
            var companyName = data.BusinessPartner.LastName;
            var contactPersonId = data.BusinessPartner.ContactPersonId;
            var street = data.BusinessPartner.Address.Street;
            var city = data.BusinessPartner.Address.ZipCode + " " + data.BusinessPartner.Address.City;
            var documentNumber = data.Number;

            var endCustomer = data.ExtraFieldsWithType.filter((field: any) => {
                if (field.Name == "_TITEL") {
                    return field;
                }
            })

            if (endCustomer != null && endCustomer != undefined) {
                endCustomer = endCustomer[0].Value;
            } else {
                endCustomer = "";
            }

            setCustomerNumber(customerNumber ? customerNumber : "");
            setCompanyName(companyName ? companyName : "");
            setStreet(street ? street : "");
            setDocumentNumber(documentNumber ? documentNumber : "");
            setCity(city ? city : "");
            setEndCustomer(endCustomer ? endCustomer : "");

            fetchContactPerson(customerNumber, contactPersonId);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        var randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        setLoadingMessage(randomLoadingMessage);

        const interval = setInterval(() => {
            setLoadingMessage((prevMessage: any) => {
                var randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
                return randomLoadingMessage;
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };


        
    }, []);

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

        var sectionId = "10152";
        if (selectedSection == "Arbeitsvorbereitung") {
            sectionId = "10152";
        }
        if (selectedSection == "Auftragsbearbeitung") {
            sectionId = "10197";
        }
        if (selectedSection == "Montage") {
            sectionId = "10151";
        }
        if (selectedSection == "Qualitätssicherung") {
            sectionId = "10149";
        }
        if (selectedSection == "Vertrieb") {
            sectionId = "10150";
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
                customfield_10067: email,
                summary: "[AUTO] Neues Ticket",
                description: "sys_cluent | Ein neues RMA-Ticket wurde erstellt für die " + companyName + " in " + cityName + " (" + streetName + " " + streetNumber + ", " + plz + "). " + (wholeTicket ? "Der gesamte Auftrag wurde reklamiert." : "Es wurde" + (length > 1 ? "n" : "") + " " + length + " Artikel reklamiert."),
                customfield_10024: requestTypeId.toString(),
                customfield_10080: cityName,
                customfield_10059: companyName,
                customfield_10078: plz,
                customfield_10079: streetName + " " + streetNumber,
                customfield_10206: parseFloat(customerNumber),
                customfield_10065: phoneNumber,
                customfield_10100: {
                    "id": sectionId.toString()
                },
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

        const data = await response.json();

        if (data.key) {
            router.replace("/success?key=" + data.key + "&id=" + key);
        }
    }

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", flexDirection: "column", height: "100vh", backgroundColor: "#eee" }}>
                <div style={{ height: 300, width: 300 }}>
                    <Lottie
                        animationData={animationData}
                        className="flex justify-center items-center"
                        height={300}
                        width={300}
                        loop={true}
                    />
                </div>
                <p style={{ color: "#000", fontWeight: "300" }}>{loadingMessage}</p>
                <p style={{color: "#000", fontWeight: "600", position: "absolute", bottom: 50}}>Made by the Intern</p>
            </div>

        );
    }


    return (
        <main className={styles.main}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <img src="abs.png" width={122} height={58} className="logo" />
                    <p className={styles.typo}>-Support</p>
                </div>
                <div style={{ display: page == 0 ? "flex" : "none", flexDirection: "column", gap: 30 }}>
                    <Dropdown label="ABS-Abteilung" value={selectedSection} setValue={setSelectedSection} options={sectionOptions} placeholder="ABS" />
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
                            <Button text="Zurück" onPress={() => { router.replace("/?key=" + key) }} />
                            <Button text="Weiter" onPress={() => { setPage(page + 1) }} />
                        </div>
                    </div>
                </div>
                <div style={{ display: page == 1 ? "flex" : "none", flexDirection: "column", gap: 30 }}>
                    <Dropdown label="Anrede" value={salutation} setValue={setSalutation} options={salutionOptions} placeholder="Herr" />

                    <Input label="Vorname" value={firstName} setValue={setFirstName} placeholder="Max" />
                    <Input label="Nachname" value={lastName} setValue={setLastName} placeholder="Mustermann" />
                    <Input label="Telefonnummer" value={phoneNumber} setValue={setPhoneNumber} placeholder="+123 123123123123" />
                    <Input label="E-Mail Adresse" value={email} setValue={setEmail} placeholder="max.mustermann@gmail.com" />
                    <Input label="Bauvorhaben (BV-Titel)" value={endCustomer} setValue={setEndCustomer} placeholder="Kölner Dom" />
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
                    <Input label="Belegnummer" value={documentNumber} setValue={setDocumentNumber} placeholder="123456" />
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
                    <hr style={{ display: wholeTicket ? "none" : "flex", borderColor: "rgba(0,0,0,0.15)", borderRadius: 15, width: "90%" }}></hr>
                    <div style={{ display: wholeTicket ? "none" : "flex", }}>
                        {/*<Button text="Artikel hinzufügen" onPress={() => createArticle()} />*/}

                    </div>
                    <div style={{ display: wholeTicket ? "none" : "flex", flexDirection: "column", gap: 30, overflowY: "auto", overflowX: "hidden", maxHeight: "40vh" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%", }}>
                            <div>
                                <p style={{ color: "#000" }}></p>
                            </div>
                            <div>
                                <p style={{ color: "#000", fontWeight: "600" }}>Anzahl</p>
                            </div>
                            <div>
                                <p style={{ color: "#000", fontWeight: "600" }}>Artikelnummer</p>
                            </div>
                            <div>
                                <p style={{ color: "#000", fontWeight: "600" }}>Seriennummer</p>
                            </div>
                            
                        </div>
                        {articles.map((article: any, index: any) => {
                            return (
                                <Row postionNumber={article.postionNumber} selectedArticles={selectedArticles} article={article} setSelectedArticles={setSelectedArticles} label={(index + 1) + ". Artikel"} index={index} value={articles} setValue={setArticles} first={index == 0}></Row>
                            )
                        })}

                    </div>
                    <hr style={{ borderColor: "rgba(0,0,0,0.15)", borderRadius: 15, width: "90%" }}></hr>
                    <p style={{ display: wholeTicket ? "none" : "flex", color: "#000" }}>{selectedArticles} / 5</p>
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
                <img src="imageII.jpg" width={screenWidth / 3.5} height={screenHeight} />
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
