import { Router, useRouter } from 'next/router';
import styles from '../meetups/meetupItems.module.css'
import Card from '../ui/Card';



function MeetupItem(props) {
const router = useRouter()
  const showDetailsHandler =()=>
  {
     router.push('/'+ props.id)
      
  }
 
  return (
    <li className={styles.meetupItem}>
      <Card>
        <div  className={styles.meetUpImg}> 
          <img src={props.image} alt={props.title} className={styles.img} />
        </div>
        <div>
          <h3 className={styles.meetUpHead}>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <button className={styles.meetUpButton} onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
