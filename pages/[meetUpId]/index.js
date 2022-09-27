import { Fragment } from "react";
import MeetUpDetail from "./MeetUpDetail";

function MeetUpDetails (props)
{

   return (
    <Fragment>
        <MeetUpDetail  meetups={props.meetUpData} />
    </Fragment>
   )
}

export async function getStaticPaths()
{
    return{
        fallback: false,
        paths:[
            {params:{
                meetUpId:'m1'
            }}
        ]
    }
}

export async function getStaticProps(context)
{
  
    const meetUpId = context.params.meetUpId;
console.log(meetUpId ,'this is params.id')
    return{
        props:{
             meetUpData:{
                image:"hello",
                id:meetUpId,
                title:'Test one',
                address:'Test address',
                description:'This is test address'
             }
        }
    }
}
export default MeetUpDetails;