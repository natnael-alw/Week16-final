import React from "react";
const Details= (props)=>{
//for the modal in the table
const details= props.studentDetail
const darkMode = props.darkMode
        return(
        <div style={{color:'black', backgroundColor: darkMode? 'rgba(115, 104, 104, 0.55)': 'white'}}>
        <ul >
               
             <p><img src={details.avatar} /></p>
             
                <li>Phone: {details.phoneNumber} </li> 
                <li>State: {details.state}</li>
                <li>Zipcode: {details.zipcode}</li> 
        </ul>
        </div>
    )


}

export default Details