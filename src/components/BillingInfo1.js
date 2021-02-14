import React from 'react'

const BillingInfo1 = ({nextStep, setActive}) => {
    return (
        <div className="billing-info">
            <div className="billing-info-container container">
                <div className="name-on-card flex-column mt-32">
                    <label>Name on Card<span>*</span></label>
                    <input className="mt-8" type="text" />
                </div>

                <div className="card-type flex-column mt-32">
                    <label>Card Type<span>*</span></label>
                    <input className="mt-8" type="email"/>
                </div>

                <div className="card-number flex mt-32">
                    <div className="card-details flex-column">
                        <label>Card Details<span>*</span></label>
                        <input className="mt-8" type="text" placeholder="44960   44960   44960   44960"/>
                    </div>
                    <div className="expiry-date flex-column">
                        <label>Expiry Date<span>*</span></label>
                        <input className="mt-8" type="text" placeholder="04 / 23" />
                    </div>
                    <div className="cvv flex-column">
                        <label>CVV<span>*</span></label>
                        <input className="mt-8" type="text" placeholder="923" />
                    </div>
                </div>
                <div className="buttons mt-32">
                    <button className="btn-pr" onClick={()=>{ setActive("confirm");nextStep();}}>Next</button>
                    <button className="cancel-btn">Cancel Payment</button>
                </div>
            </div>   
            
        </div>
    )
}

export default BillingInfo1
