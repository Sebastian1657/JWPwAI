import React, { useState } from "react";
import HandleMouseOver from "./HandleMouseOver";

function HandleClick() {
    const [show, setShow] = useState(false);

    return (
        <div style={{textAlign: "center"}}>
            <button onClick={() => setShow(prev => !prev)}>
                {show ? 'Ukryj inne elementy' : 'Pokaż inne elementy'}
            </button>
            {show && 
                <div className="sealContainer">
                    <hr />
                        <HandleMouseOver />
                    <hr />
                </div>
            }
        </div>
    );
}

export default HandleClick;