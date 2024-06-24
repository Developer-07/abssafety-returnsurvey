'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "@/public/loading.json"
import successAnimation from "@/public/success.json"

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
    const key = useSearchParams().get("key");
    const id = useSearchParams().get("id");
    var router = useRouter();

    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }}>
            <div style={{ height: 300, width: 300 }}>
                <Lottie animationData={successAnimation} width={300} height={300} loop />
            </div>
            <p style={{ color: "#000", fontWeight: "400", marginTop: 20 }}>Ticket / Reklamation erfolgreich erstellt!</p>

            <div style={{display: "flex", flexDirection: "row", gap: 20, marginTop: 20,}}>
                <Button text="Ticket ansehen" style={{ marginTop: 20 }} onPress={() => window.location.href = "https://abssafety.atlassian.net/jira/servicedesk/projects/RMA/queues/custom/35/" + key}>Ticket ansehen</Button>
                <Button text="Wieder zurück zum Anfang" style={{ marginTop: 20 }} onPress={() => router.replace("/?key=" + id)}></Button>
            </div>

            <p style={{color: "#000", fontWeight: "600", position: "absolute", bottom: 50}}>Made by the Intern</p>
        </div>
    );
}