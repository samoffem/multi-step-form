import React,{useState} from 'react'
import UserForm from './components/UserForm'

function App() {
  const [active, setActive] = useState("personal-info")
  return (
    <div className="App">
      <div className="bg">
        <div className="header container">
          <h2 className="header-text ">Complete Your Purchase</h2>
          <div className="nav-text flex mt-8">
            <h4 className={active==="personal-info"? "active":""}>Personal Info</h4>
            <h4 className={active==="billing-info"? "active":""}>Billing Info</h4>
            <h4 className={active==="confirm"? "active":""}>Confirm Payment</h4>
          </div>
        </div>
        
        <UserForm setActive={setActive}/>
      </div>
      
    </div>
  );
}

export default App;
