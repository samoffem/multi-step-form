import React from 'react'

const BillingInfo2 = ({nextStep}) => {
    return (
        <div className="info-container container">
            <div className="info-wrapper">
                <div className="top flex space-btw pl-32 pr-32 mt-32">
                    <h3>Item Name</h3>
                    <h3># Price</h3>
                </div>
                <div className="info-content">
                    <div className="item flex space-btw pl-32 pr-32">
                        <h4>Data Science and usability</h4>
                        <h4>50,000.00</h4>
                    </div>
                    <div className="item flex space-btw pl-32 pr-32 mt-32">
                        <h4>Shipping</h4>
                        <h4>0.00</h4>
                    </div>
                    <div className=" pl-32 pr-32 mt-32 ">
                        <div className="total-wrapper">
                            <div className="total flex space-btw">
                                <h4>Total</h4>
                                <h4>50,000.00</h4>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="info-btns space-btw mt-32">
                    <button className="btn-pr" onClick={nextStep}>Pay</button>
                    <button className="cancel-btn">Cancel Payment</button>
                </div>
        </div>
    )
}

export default BillingInfo2
