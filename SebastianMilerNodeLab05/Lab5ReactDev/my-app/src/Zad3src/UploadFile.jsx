import React, { useState } from "react";
import ShowImage from "./ShowImage";

function UploadFile() {
    const [showImage, setShowImage] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        
        if (!file) {
            setShowImage(false);
            return;
        }
        if (file.name === "password.json") {
            setShowImage(true);
        }else{
            setShowImage(false);
            alert("Spróbuj wybrać inny plik.");
        }
    };
    return (
        <div>
            <input type="file" 
                onChange={handleFileUpload} 
            />
            <hr />
            {showImage && <ShowImage />}
            <hr />
        </div>
    );
}

export default UploadFile;