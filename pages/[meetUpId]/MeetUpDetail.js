

import { Fragment } from "react";

function MeetUpDetail (prop)
{
    
    console.log(prop.meetups)
   return (
    <Fragment>
        <h2> {prop.meetups.title} </h2>
        <p>{prop.meetups.address}</p>
        <i>{prop.meetups.id}</i>
        
    </Fragment>
   )
}

export default MeetUpDetail;