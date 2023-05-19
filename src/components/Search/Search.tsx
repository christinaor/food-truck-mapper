import { useCallback, useState } from 'react';

import SearchIcon from '/src/assets/search-icon.svg';
// import SearchAddress from '../SearchAddress/SearchAddress';
// import SearchZipCode from '../SearchZipCode/SearchZipCode';

import styles from './styles.module.scss';

export default function Search(props: { 
  setZipCode: any; 
  setSearchedBounds: any; 
}) {
  const {
    setZipCode,
    setSearchedBounds,
  } = props;

  const [searchZipCode, setSearchZipCode] = useState('');
  const [address, setAddress] = useState('');

  // Retrieve the latitude/longitude of the zip code entered by user
  const handleSearch = useCallback(() => {
    if (searchZipCode.length === 5) {
      console.log(searchZipCode)

      const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchZipCode}&key=${process.env.VITE_OPEN_CAGE_API_KEY}`;

      const fetchSearchedBounds = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const result = await data.results[0];
        setSearchedBounds(result);
        setZipCode(searchZipCode);
      }

      fetchSearchedBounds();
    } else {
      console.log('Not a zip code!')
    }
  }, [setSearchedBounds, searchZipCode, setZipCode]);

  return (
    <div className={styles.search}>
      {/* <div className={styles.searchForm}> */}
        {/* <div className={styles.searchAddressField}>
          <label htmlFor="search-address">Address</label>
          <input name="search-address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div> */}
        {/* <div className={styles.searchZipCode}> */}
          {/* <label htmlFor="search-zip-code">Zip Code</label> */}
          <input className={styles.searchInput} name="search-zip-code" placeholder="Search Zip Code" value={searchZipCode} onChange={(e) => setSearchZipCode(e.target.value)} />
        {/* </div> */}
        <button className={styles.searchSubmit} onClick={handleSearch}>
          <img className={styles.searchIcon} src={SearchIcon} alt="clickable search icon" />
        </button>
      {/* </div> */}
    </div>
  )
}