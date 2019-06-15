import React from 'react';
import { Link } from 'react-router-dom'; 

const RegistrationForm = (props) => {
        return(
            <div>
                <h1>Provider Registration</h1>
                <form onSubmit={props.handleSubmit}>
                    <div className="inputs">
                        <label>
                            First Name
                            <br/>
                            <input type="text" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleInputChange}/>
                        </label>
                        <label>
                            Last Name
                            <br/>
                            <input type="text" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleInputChange} />
                        </label>
                        <label>
                            NPI Number
                            <br/>     
                            <input type="text" name="npiNumber" value={props.npiNumber} placeholder="NPI Number" onChange={props.handleInputChange} />
                        </label>
                        <label>
                            Address
                            <br/>
                            <input type="text" name="address" value={props.address} placeholder="Business Address" onChange={props.handleInputChange} />
                        </label>
                        <label>
                            Phone
                            <br/>
                            <input type="text" name="phoneNumber" value={props.phoneNumber} placeholder="Phone Number" onChange={props.handleInputChange} />
                        </label>
                        <label>
                            Email
                            <br/>
                            <input type="text" name="email" value={props.email} placeholder="Email" onChange={props.handleInputChange} />
                        </label>
                    </div>
                    <Link to="/confirm"><button>Submit</button></Link>
                </form>
            </div>
        )
    }

export default RegistrationForm;