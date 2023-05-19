import Title from '../../components/TitleBar/TitleBar';
import SearchOptionsBar from '../../components/SearchOptionsBar/SearchOptionsbar';

import styles from './styles.module.scss';

export default function TopBar(props: { 
  setZipCode: any; 
  setSearchedBounds: any;
  toggleListView: boolean;
  setToggleListView: any;
}) {
  const {
    setZipCode,
    setSearchedBounds,
    toggleListView,
    setToggleListView,
  } = props;

  return (
    <div className={styles.topBar}>
      <Title />
      <SearchOptionsBar
        setZipCode={setZipCode}
        setSearchedBounds={setSearchedBounds}
        toggleListView={toggleListView}
        setToggleListView={setToggleListView}
      />
    </div>
  )
}