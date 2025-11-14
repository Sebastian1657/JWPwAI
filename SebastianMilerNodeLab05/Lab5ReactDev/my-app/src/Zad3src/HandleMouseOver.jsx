import React, { useState, useEffect } from "react";
import LoadDataFromJson from "./LoadDataFromJson";

function HandleMouseOver() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let progressBar = 0;
        if(isActive && !isComplete){
            progressBar = setInterval(() => {
                setProgress(prev => {
                    if(prev >= 100){
                        clearInterval(progressBar);
                        setIsComplete(true);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 30);
        }else if (!isActive && !isComplete){
            setProgress(0);
        }
        return () => {
            if(progressBar){
                clearInterval(progressBar);
            }
        };
    }, [isActive, isComplete]);

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };
    
    return (
        <div 
            className="loadingBarContainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="loadingBarTrack">
                <div 
                    className="loadingBarFill"
                    style={{ width: `${progress}%` }}
                >
                </div>
                <div className="loadingBarText">
                    {progress}%
                </div>
            </div>
            {isComplete && <LoadDataFromJson />}
        </div>
    );
}

export default HandleMouseOver;