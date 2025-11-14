import React, { useState } from "react";
import UploadFile from "./UploadFile";

function LoadDataFromJson() {
    const [data, setData] = useState(null);
    const [password, setPassword] = useState("");
    const [showUpload, setShowUpload] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                setData(data);
            } catch (error) {
                alert("Błąd: Wybrany plik nie jest poprawnym plikiem JSON.");
                setData(null);
            }
        };
        reader.readAsText(file);
    };

    const handlePasswordChange = (event) => {
        if(event.key === "Enter"){
            if(password === "react"){
                setShowUpload(true);
            }else{
                alert("Błąd: Hasło niepoprawne.");
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <hr />
            {data &&
                <div style={{textAlign: "left"}}>
                    <h2>Dane:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            }
            <hr />
            <input type="password" placeholder="hasło" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handlePasswordChange} />
            <hr />
            {showUpload && <UploadFile />}
        </div>
    );
}

export default LoadDataFromJson;