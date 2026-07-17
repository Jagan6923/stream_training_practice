import React, { useState } from 'react'

const Car = () => {

    let [summary, setSummary] = useState({
        model: "",
        color: "",
        transmission: "",
        fuelType: "",
        sunroof: false,
        basePrice: 0,
        automaticPrice: 0,
        sunroofPrice: 0,
        totalPrice: 0
    });


    const calculatePrice = () => {
        let basePrice = 0;
        let automaticPrice = 0;
        let sunroofPrice = 0;
        if (summary.model === "Nexon") {
            basePrice = 800000;
        } else if (summary.model === "Punch") {
            basePrice = 600000;
        } else if (summary.model === "Harrier") {
            basePrice = 1500000;
        }

        if (summary.transmission === "Automatic") {
            automaticPrice = 100000;
        }

        if (summary.sunroof) {
            sunroofPrice = 50000;
        }

        const totalPrice = basePrice + automaticPrice + sunroofPrice;

        setSummary({
            ...summary,
            basePrice,
            automaticPrice,
            sunroofPrice,
            totalPrice
        });
    };

    const resetSummary = () => {
        setSummary({
            model: "",
            color: "",
            transmission: "",
            fuelType: "",
            sunroof: false,
            basePrice: 0,
            automaticPrice: 0,
            sunroofPrice: 0,
            totalPrice: 0
        });
    };

    const bookNow = () => {
        alert(`Booking Confirmed for ${summary.model} with total price of ${summary.totalPrice}`);
    }

    return (
        <div className='container mt-5 car-config'>
            <h1>Car Configuration Tool</h1>


            <h4>Choose Model</h4>
            <select value={summary.model} onChange={(e) => setSummary({ ...summary, model: e.target.value })}>
                <option value="Nexon" >Nexon</option>
                <option value="Punch">Punch</option>
                <option value="Harrier">Harrier</option>
            </select>

            <h4>Choose Color</h4>
            <select value={summary.color} onChange={(e) => setSummary({ ...summary, color: e.target.value })}>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
            </select>

            <h4>Choose Transmission</h4>
            <select value={summary.transmission} onChange={(e) => setSummary({ ...summary, transmission: e.target.value })}>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
            </select>

            <h4>Choose Fuel Type</h4>
            <select value={summary.fuelType} onChange={(e) => setSummary({ ...summary, fuelType: e.target.value })}>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
            </select>

            <h4>Sunroof</h4>
            <input type="checkbox" id="sunroof" name="sunroof" value="sunroof" checked={summary.sunroof}
                onChange={(e) => setSummary({ ...summary, sunroof: e.target.checked })} />
            <label htmlFor="sunroof"> Include Sunroof</label>

            <div className='summary mt-4 car-summary'>
                <h4>Summary</h4>
                <p>Model: {summary.model}</p>
                <p>Color: {summary.color}</p>
                <p>Transmission: {summary.transmission}</p>
                <p>Fuel Type: {summary.fuelType}</p>
                <p>Sunroof: {summary.sunroof ? "Yes" : "No"}</p>


                <p>Base Price: {summary.basePrice}</p>
                <p>Automatic Price: {summary.automaticPrice}</p>
                <p>Sunroof Price: {summary.sunroofPrice}</p>
                <p>Total Price: {summary.totalPrice}</p>

            </div>

            <button className='btn btn-primary' onClick={calculatePrice}>Calculate</button>
            <button className='btn btn-danger m-2' onClick={resetSummary}>Reset</button>
            <button className='btn btn-success ' onClick={bookNow}>Book Now</button>
        </div>
    )
}

export default Car
