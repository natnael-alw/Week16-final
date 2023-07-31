import React from "react";
const Details= (props)=>{

const details= props.studentDetail
        return(
        <>
        <ul>
               
             <p><img src={details.avatar}/></p>
             
                <li>Phone: {details.phoneNumber} </li> 
                <li>State: {details.state}</li>
                <li>Zipcode: {details.zipcode}</li> 
        </ul>
        </>
    )


}

export default Details