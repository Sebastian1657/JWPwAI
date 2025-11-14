import React, { useState } from "react";

function ChangeStyle() {
    const [h1, setH1] = useState({});
    const [h2, setH2] = useState({});
    const [p, setP] = useState({});
    const [background, setBackground] = useState({});

    const getRandomFontSize = () => {
        return `${Math.floor(Math.random() * 46) + 6}px`;
    };

    const getRandomColor = () => {
        return 'rgb(' 
            + Math.floor(Math.random() * 256) + ', ' 
            + Math.floor(Math.random() * 256) + ', ' 
            + Math.floor(Math.random() * 256) 
                + ')';
    };

    const handleRandomStyle = () => {
        setH1({
            fontSize: getRandomFontSize(),
            color: getRandomColor(),
        });
        setH2({
            fontSize: getRandomFontSize(),
            color: getRandomColor(),
        });
        setP({
            fontSize: getRandomFontSize(),
            color: getRandomColor(),
            background: getRandomColor(),
        });
        setBackground({
            background: getRandomColor(),
            padding: "10px",
            border: "2px solid "+getRandomColor(),
            borderRadius: "5px",
        });
    }

    return (
        <div>
            <button onClick={handleRandomStyle}>Wylosuj styl</button>
            <hr />
            <div style={background}>
                <h1 style={h1}>🎉 Gratulacje 🎉</h1>
                <h2 style={h2}>Doszedłeś do końca zadania Trzeciego.</h2>
                <p style={p}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quo doloremque dolorum nostrum! Corrupti inventore cum obcaecati, tempora odio perferendis?, ipsum dolor sit amet consectetur adipisicing elit. Eos, aspernatur rem iure accusamus distinctio consequatur sapiente. Dignissimos commodi magni libero saepe similique culpa nobis neque voluptatem necessitatibus doloremque distinctio et cupiditate, earum perferendis voluptate provident pariatur animi autem, esse, amet sed officiis assumenda eveniet! Error non dignissimos iure dolor culpa?
                </p>
            </div>
        </div>
    );
}

export default ChangeStyle;