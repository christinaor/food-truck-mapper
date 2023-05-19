import ListIcon from '/src/assets/list-icon.svg';
import MapIcon from '/src/assets/map-icon.svg';

import styles from './styles.module.scss';

export default function ToggleListView(props: {
  toggleListView: boolean;
  setToggleListView: any;
}) {
  const {
    toggleListView,
    setToggleListView,
  } = props;

  return (
    <button className={styles.toggleListView} onClick={() => setToggleListView(!toggleListView)}>
      <img className={`${styles.icon} ${toggleListView ? styles.active : ''}`} src={ListIcon} alt="list icon toggle" />
      <img className={`${styles.icon} ${!toggleListView ? styles.active : ''}`} src={MapIcon} alt="map icon toggle" />
    </button>
  )
};