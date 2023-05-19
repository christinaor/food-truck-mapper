import Search from "../Search/Search";
import ToggleListView from "../ToggleListView/ToggleListView";

import styles from './styles.module.scss';

export default function SearchOptionsBar(props: {
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
    <div className={styles.searchOptionsBar}>
      <Search 
        setZipCode={setZipCode}
        setSearchedBounds={setSearchedBounds}
      />
      <ToggleListView 
        toggleListView={toggleListView}
        setToggleListView={setToggleListView}
      />
    </div>
  )
};