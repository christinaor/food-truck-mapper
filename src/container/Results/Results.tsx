import { useState } from 'react';

import ResultsList from '../../components/ResultsList/ResultsList';
import ResultsMap from '../../components/ResultsMap/ResultsMap';

import styles from './styles.module.scss';

export default function Results(props: { 
  data: object; 
  proximity: number;
  zipCode: string; 
  searchedBounds: object;
  toggleListView: boolean;
}) {
  const {
    data,
    proximity,
    zipCode,
    searchedBounds,
    toggleListView,
  } = props;

  return (
    <div className={styles.results}>
      {toggleListView && <ResultsList 
        data={data}
        zipCode={zipCode}
        searchedBounds={searchedBounds}
      />}
      {!toggleListView && <ResultsMap 
        data={data}
        proximity={proximity}
        searchedBounds={searchedBounds}
        zipCode={zipCode}
      />}
    </div>
  )
}