// import dotenv from 'dotenv';
// dotenv.config();

import styles from './styles.module.scss';

export default function ResultsList(props: { data: any; zipCode: string; searchedBounds: object; }) {
  const {
    data,
  } = props;

  const currentDate = new Date();
  console.log(currentDate)

  return (
    <div className={styles.resultsListContainer}>
      <ul className={styles.resultsList}>
        {/* <li key="results-list-header" className={styles.resultsListHeader}>
          <h2 className={styles.resultHeaderCell}>FOOD TRUCK</h2>
          <h2 className={styles.resultHeaderCell}>ADDRESS</h2>
        </li> */}
        {data?.map((result: { 
          objectid: string; 
          applicant: string;
          address: string; 
          latitude: string | number; 
          longitude: string | number; 
          expirationdate: string; 
        }) => (
          <li key={`result-${result.objectid}`} className={styles.resultItem}>
            <div className={`${styles.resultItemCell} ${styles.resultApplicant}`}>{result.applicant}</div>
            <div className={`${styles.resultItemCell} ${styles.resultAddress}`}>{result.address}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}