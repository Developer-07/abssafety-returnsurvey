"use client"

import axios from "axios";

export default function Test() {

    const test = async () => {

        const url = 'http://localhost:5000/issue';
        const token = 'ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD'; // Ersetzen Sie dies durch Ihren tatsächlichen Basic Auth Token
        const xsrfToken = '32dc7937cabc9139a4c5da9dcde1bc981a00f27d_lin'; // Ersetzen Sie dies durch den tatsächlichen XSRF-Token

        const bodyData = JSON.parse('{ "fields": { "project": {     "key": "ITT" }, "summary": "REST EXAMPLE 2", "description": "Creating an issue via REST API", "issuetype": { "name": "Task", "id": "10116"         } } }');

        try {
            const response = await axios.post(url, bodyData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${token}`,
                }
            });

            console.log('Erfolg:', response.data);
        } catch (error) {
            if (error.response) {
                // Server antwortete mit einem Statuscode, der außerhalb des Bereichs von 2xx liegt
                console.error('Fehler:', error.response.status, error.response.statusText);
                console.error('Fehlerdetails:', error.response.data);
            } else if (error.request) {
                // Anfrage wurde gesendet, aber keine Antwort empfangen
                console.error('Keine Antwort erhalten:', error.request);
            } else {
                // Ein anderes Problem trat bei der Anforderung auf
                console.error('Anfrage fehlgeschlagen:', error.message);
            }
        }

    }

    return (
        <div>
            <h1>Test Page</h1>
            <button onClick={() => test()}>Test</button>
        </div>
    )
}