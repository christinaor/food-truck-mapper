import ResultsList from '../../components/ResultsList/ResultsList';
import ResultsMap from '../../components/ResultsMap/ResultsMap';

import styles from './styles.module.scss';

export default function Results(props: { 
  data: object; 
  proximity: number;
  zipCode: string; 
  searchedBounds: object 
}) {
  const {
    data,
    proximity,
    zipCode,
    searchedBounds,
  } = props;

  return (
    <div className={styles.results}>
      {/* <ResultsList 
        data={data}
        zipCode={zipCode}
        searchedBounds={searchedBounds}
      /> */}
      <ResultsMap 
        data={data}
        proximity={proximity}
        searchedBounds={searchedBounds}
        zipCode={zipCode}
      />
    </div>
  )
}