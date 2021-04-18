import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [count, setcount] = useState(0);
    const [intervalID, setintervalID] = useState(null)

    const startCounter = () => {
        if (intervalID) return;
        let id = setInterval(() => {
            setcount(prev => prev + 1);
        }, 1500);
        setintervalID(id);
    };

    const stopCounter = () => {
        if (!intervalID) return;
        clearInterval(intervalID)
        setintervalID(null);
        setcount(0);
    }

    useEffect(() => {
        return () => clearInterval(intervalID);
    }, [intervalID]);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-5 mx-auto d-flex justify-content-center">
                    <button className="btn btn-primary" type="button" name="start" onClick={startCounter}>Start Timer</button>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-5 mx-auto d-flex justify-content-center">
                    <button className="btn btn-primary" type="button" name="end" onClick={stopCounter}>End Timer</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-5 mx-auto d-flex justify-content-center">
                    <h1>Count: {count}
                    </h1></div>
            </div>
        </div>
    )
}

export default Timer
