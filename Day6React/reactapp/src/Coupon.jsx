import React from 'react'
import coupon from './coupon.json'
import { useState } from 'react';
const Coupon = () => {

    console.log(coupon);

    const couponHandler = (e) => {
        alert(`Coupon ${e.target.innerText} copied successfully!`);
    }

    const [searchCoupon, setSearchCoupon] = useState("");



    return (
        <div className='container  coupon'>
            <h1>Coupons</h1>
            <input type="text" placeholder='Enter coupon code' onChange={(e) => setSearchCoupon(e.target.value)} value={searchCoupon} className='mb-4' />
            <div className='coupon-grid'>
                {coupon
                    .filter((c) => c.couponCode.toLowerCase().includes(searchCoupon.toLowerCase()))
                    .map((c) => {
                        return (
                            <div key={c.id} className='coupon-card' style={{ backgroundColor: c.status === "Expired" ? "#f1b9b9" : "#caf7b7", padding: "10px", marginBottom: "10px" }}>
                                <button disabled={c.status === "Expired"} onClick={couponHandler} style={{ cursor: c.status === "Expired" ? "not-allowed" : "pointer" }}>{c.couponCode}</button>
                                <p>Discount: {c.discount}</p>
                                <p>Minimum Purchase: {c.minimumPurchase}</p>
                                <p>Expires: {c.expiryDate}</p>
                                <p style={{ "color": c.status === "Expired" ? "red" : "green" }}>{c.status}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}

export default Coupon
