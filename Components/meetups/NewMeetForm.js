import { useRef } from 'react';
import Card from '../ui/Card';
import styles from '../meetups/newMeetForm.module.css';


function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.inputs}>
          <label htmlFor='title' className={styles.inputField}>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef}  className={styles.inputField}/>
        </div>
        <div className={styles.inputs}>
          <label htmlFor='image' className={styles.inputField}>Meetup Image</label>
          <input type='url'  id='image' ref={imageInputRef} className={styles.inputField}/>
        </div>
        <div className={styles.inputs}>
          <label htmlFor='address' className={styles.inputField}>Address</label>
          <input type='text' required id='address' ref={addressInputRef} className={styles.inputField}/>
        </div>
        <div className={styles.inputs}>
          <label htmlFor='description' className={styles.inputField}>Description</label>
          <textarea className={styles.inputField}
            id='description'
            required
            rows='5'
            
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.inputs}>
          <button className={styles.button}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
