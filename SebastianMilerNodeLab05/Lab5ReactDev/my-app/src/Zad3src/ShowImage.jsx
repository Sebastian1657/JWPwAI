import React, { useState } from "react";
import ChangeStyle from "./ChangeStyle";

function ShowImage() {
    const [paths, setPaths] = useState([]);

    const handleNextImage = () => {
        setPaths(prev => {
            const newCount = prev.length + 1;
            if(newCount > 12){
                return prev;
            }

            const newPath = `${process.env.PUBLIC_URL}/images/foka (${newCount}).jpg`;
            return [...prev, newPath];
        })
    };

    const count = paths.length;
    return (
        <div>
            <button onClick={handleNextImage} disabled={count >= 12}>
                Pokaż kolejną fokę
            </button>
            <span> {count} </span>
            <hr />
            <div>
                {
                    paths.map((path, index) => {
                        return <img src={path} alt={"Foka"} key={index} style={ {width: "300px", height: "200px"} } />
                    })
                }
            </div>
            <hr />
            {count >= 12 && <ChangeStyle />}
        </div>
    );
}

export default ShowImage;