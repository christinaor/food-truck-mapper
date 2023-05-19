import { useState, useEffect } from 'react'
import './App.css'

import Title from './components/TitleBar/TitleBar';
import Search from './components/Search/Search';
import Results from './container/Results/Results';
import ToggleListView from './components/ToggleListView/ToggleListView';
import SearchOptionsBar from './components/SearchOptionsBar/SearchOptionsbar';

function App() {
  const [data, setData] = useState();
  const [displayedData, setDisplayedData] = useState();
  const [zipCode, setZipCode] = useState('');
  const [searchedBounds, setSearchedBounds] = useState();
  const [proximity, setProximity] = useState(1);
  const [toggleListView, setToggleListView] = useState(false);

  console.log(searchedBounds)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.sfgov.org/resource/rqzj-sfat.json');
        const fetchedData = await response.json();
        const currentDate = await new Date();
        // Filter out food trucks with an expired permit
        const filteredData = fetchedData.filter(
          result => new Date(result.expirationdate) > currentDate
        );
        setData(filteredData);
        setDisplayedData(filteredData);
      } catch (error) {
        console.log(`Error encountered in fetching initial data: ${error}`);
        return `Error encountered in fetching initial data: ${error}`;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchedBounds) {
      // check latitude and longitude of each food truck is within searchedBounds
      const newDisplayedData = (data ?? []).filter(record => 
        // Filter food trucks based on their bounds within specified zip code
        // (record.latitude < searchedBounds.bounds.northeast.lat) && 
        // (record.latitude > searchedBounds.bounds.southwest.lat) &&
        // (record.longitude < searchedBounds.bounds.northeast.lng) &&
        // (record.longitude > searchedBounds.bounds.southwest.lng)

        // Filter food trucks based on their bounds within specified proximity of a zip code
        // 1 mile is 1/69 latitude and 1/60 longitude
        (record.latitude < searchedBounds.geometry.lat + proximity * (1/69)) &&
        (record.latitude > searchedBounds.geometry.lat - proximity * (1/69)) &&
        (record.longitude < searchedBounds.geometry.lng + proximity * (1/60)) &&
        (record.longitude > searchedBounds.geometry.lng - proximity * (1/60))
      )
      setDisplayedData(newDisplayedData);
    }
  }, [data, searchedBounds])

console.log(displayedData)
  return (
    <>
      <Title />
      <SearchOptionsBar
        setZipCode={setZipCode}
        setSearchedBounds={setSearchedBounds}
        toggleListView={toggleListView}
        setToggleListView={setToggleListView}
      />
      <Results 
        proximity={proximity}
        data={displayedData}
        zipCode={zipCode}
        searchedBounds={searchedBounds}
        toggleListView={toggleListView}
      />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}


      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
