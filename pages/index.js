import styles from '../Components/meetups/MeetupList.module.css';
import MeetupList from "../Components/meetups/MeetUpLists";
import { useEffect , useState } from 'react';

const dummyData = [
    {id:'m1',title:'first meet' , description:'Thi is is first meet up'},


]

function HomePage(props){

    const [loadedMeetUps, setloadedMeetUps] = useState([]);



    return(
       
        <div className={styles.homePage}>
 <MeetupList meetups={props.meetups}/>
 


        </div>
       
    )
}

// export  async function getStaticProps()
// {
   
//     //fetch api from backend

//     return{
//         props:{
//             meetups:dummyData,
//         },
//         revalidate: 10 ,
//     }
// }

export async function getServerSideProps()
{
    return{
        props:{
            meetups:dummyData
        }
    }
}


export default HomePage