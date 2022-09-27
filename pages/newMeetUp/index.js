import NewMeetupForm from "../../Components/meetups/NewMeetForm";
import styles from '../newMeetUp/meetForm.module.css';

function NewNeetupPage ()
{
  function addMeetupHandler (enteredMeetup)
  {
         console.log(enteredMeetup)
  }

 return(
       <div className={styles.meetUpForm}>
              <NewMeetupForm  onAddMeetup ={addMeetupHandler}/>
       </div>

 )
  
}

export default NewNeetupPage;