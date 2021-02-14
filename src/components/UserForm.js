import React, { Component } from 'react'
import BillingInfo1 from './BillingInfo1';
import BillingInfo2 from './BillingInfo2';
import Completed from './Completed';
import PersonalInfo from './PersonalInfo';

export class UserForm extends Component {
    state = {
        step: 1
    }

     nextStep = ()=>{
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    returnHome = ()=>{
        this.setState({
            step: 1
        })
    }
     prevStep = ()=>{
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }
    render() {
        const {step} = this.state
        switch (step) {
            case 1:
                return (
                    <PersonalInfo
                        nextStep={this.nextStep}
                        setActive={this.props.setActive}
                     />
                )
            case 2:
                return(
                    <BillingInfo1
                        nextStep={this.nextStep}
                        setActive={this.props.setActive}
                    />
                )
            case 3:
                return(
                    <BillingInfo2
                        nextStep={this.nextStep}
                        setActive={this.props.setActive}
                     />
                )
            case 4:
                return(
                    <Completed 
                    returnHome={this.returnHome}
                    setActive={this.props.setActive}
                     />
                )
            default:
                break;
        }
    }
}

export default UserForm

