import React, {useState} from 'react';
import "./slider.css"

const Slider = () => {
    const [value, setValue] = useState("3");
    return (
        <div >
            <div className="slider">

                <p>Current value: {value}</p>
                <div className="d-flex flex-row ranges">
                    <span>3</span>
                    <span className="last">10</span>
                </div>
                <div className="slider input">
                    <input
                        className="input slider2"
                        type="range"
                        min="3"
                        max="10"
                        step="1"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div
                        className="slider input_tracker"
                        style={{width: `${value < 50 ? value - 0.5 : value - 4}%`}}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;