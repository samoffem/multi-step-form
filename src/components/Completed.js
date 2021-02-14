import React from 'react'

const Completed = ({returnHome, setActive}) => {
    return (
        <div className="completed container mt-32">
            <div className="completed-wrapper">
                <div className="checkmark-contain">
                    <span className="check-mark">&#10003;</span>
                </div>
                <h1>Purchase Completed</h1>
                <p className="mt-32">Please check you email for the details concerning this transaction</p>
                <a onClick={()=>{ setActive("personal-info"); returnHome(); }} href="#">Return Home</a>
            </div>
            
        </div>
    )
}

export default Completed
