import React from 'react'

const Seat = ({ isAvailable, onToggle }) => {
    return (
        <button
            type='button'
            className='seat'
            onClick={onToggle}
            style={{
                width: "24px",
                height: "24px",
                backgroundColor: isAvailable ? "#1ead3d" : "#e44c60",
                margin: "2px",
                borderRadius: "20%",
                border: "none",
                cursor: "pointer"
            }}
        />
    )
}

export default Seat
