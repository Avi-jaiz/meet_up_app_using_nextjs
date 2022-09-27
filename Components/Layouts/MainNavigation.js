import Link from "next/link";
import styles from '../Layouts/mainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={styles.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li className={styles.list}>
            <Link href='/' className={styles.link}>All Meetups</Link>
          </li>
          <li className={styles.list}>
            <Link href='/newMeetUp' className={styles.link}>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
