import React from 'react';

const ConfirmationPage = (props) => {

    const clickHandler = (event) =>{
        event.preventDefault(); 
        alert("Your Info Has Been Confirmed");
        props.history.push('/');
    }

    return(
        <div>
            <h2>Please Confirm Your Information</h2>
            <h3>{`First Name: ${props.formInfo.firstName}`}</h3>
            <h3>{`Last Name: ${props.formInfo.lastName}`}</h3>
            <h3>{`NPI Number: ${props.formInfo.npiNumber}`}</h3>
            <h3>{`Address: ${props.formInfo.address}`}</h3>
            <h3>{`Phone: ${props.formInfo.phoneNumber}`}</h3>
            <h3>{`Email: ${props.formInfo.email}`}</h3>
            <button onClick={clickHandler}>Confirm</button>
        </div>
    )
}

export default ConfirmationPage;