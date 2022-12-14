import styles from '../meetups/MeetUplist.module.css';


import MeetupItem from './MeetupItems';


function MeetupList(props) {

  return (
    <ul className={styles.MeetupList}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description = {meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
