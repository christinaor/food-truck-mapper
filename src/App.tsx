import { useState, useEffect } from 'react'
import Footer from './container/Footer/Footer';

import Results from './container/Results/Results';
import TopBar from './container/TopBar/TopBar';

function App() {
  // TODO batch data
  const [data, setData] = useState<any[]>();
  const [displayedData, setDisplayedData] = useState<object | null>();
  const [zipCode, setZipCode] = useState<any>();
  const [searchedBounds, setSearchedBounds] = useState<any>(null);

  // const [proximity, setProximity] = useState<number>(1); //TODO add proximity filter
  const proximity = 1;
  const [toggleListView, setToggleListView] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.sfgov.org/resource/rqzj-sfat.json');
        const fetchedData = await response.json();
        const currentDate = await new Date();
        // Filter out food trucks with an expired permit
        const filteredData = fetchedData.filter(
          (result: { expirationdate: string; }) => new Date(result.expirationdate) > currentDate
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
      const newDisplayedData = (data ?? []).filter((record: { 
        latitude: number;
        longitude: number;
      }) => 
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
      <TopBar
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
      <Footer />
    </>
  )
}

export default App
