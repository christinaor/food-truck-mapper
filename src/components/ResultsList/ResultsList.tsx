// import dotenv from 'dotenv';
// dotenv.config();

import styles from './styles.module.scss';

export default function ResultsList(props: { data: any; zipCode: string; searchedBounds: object; }) {
  const {
    data,
    zipCode,
    searchedBounds,
  } = props;

  const currentDate = new Date();
  console.log(currentDate)

  return (
    <ul className={styles.resultsList}>
      <li key="results-list-header" className={`${styles.resultsListHeader} ${styles.resultItem}`}>
        <div>Food Truck</div>
        <div>Address</div>
      </li>
      {data?.map((result: { 
        objectid: string; 
        applicant: string;
        address: string; 
        latitude: string | number; 
        longitude: string | number; 
        expirationdate: string; 
      }) => (
        <li key={`result-${result.objectid}`} className={styles.resultItem}>
          <div>{result.applicant}</div>
          <div>{result.address}</div>
        </li>
      ))}
    </ul>
  )
}