import React from 'react'

const PersonalInfo = ({nextStep, setActive}) => {
    return (
        <div  className="personal-info">
            <div className="personal-info-container container">
                <div className="name flex-column mt-32">
                    <label>Name<span>*</span></label>
                    <input className="mt-8" type="text" />
                </div>

                <div className="email flex-column mt-32">
                    <label>Email Address<span>*</span></label>
                    <input className="mt-8" type="email"/>
                </div>

                <div className="address flex-column mt-32">
                    <label>Address 1</label>
                    <input className="mt-8" type="text"/>
                </div>

                <div className="address flex-column mt-32">
                    <label>Address 2</label>
                    <input className="mt-8" type="text"/>
                </div>

                <div className="city flex mt-32">
                    <div className="lg flex-column">
                        <label>Local government</label>
                        <input className="mt-8" type="text"/>
                    </div>
                    <div className="state flex-column ml-16">
                        <label>State</label>
                        <select className="mt-8">
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>
                <div className="buttons mt-32">
                    <button className="btn-pr" onClick={()=>{ setActive("billing-info");nextStep();  }}>Next</button>
                    <button className="cancel-btn">Cancel Payment</button>
                </div>
            </div>   
        </div>
    )
}

export default PersonalInfo
