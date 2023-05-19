import styles from './styles.module.scss';

export default function ResultsMap(props: { data: any[] | null; proximity: number; searchedBounds: any; zipCode: string | number; }) {
  const {
    data,
    proximity,
    searchedBounds,
    zipCode,
  } = props;

  const getZoomLevel = (radius: number) => {
    const scale = radius / 500;
    const zoomLevel = Math.round(16 - Math.log(scale) / Math.log(2));
    return zoomLevel;
  };

  const zoomLevel = getZoomLevel(1609.34 * proximity);
  
  return (
    <>
      {searchedBounds && <iframe 
        width="100vw"
        height="100vh" 
        className={styles.resultsMap} 
        loading="lazy" 
        allowFullScreen 
        src={`https://www.google.com/maps/embed/v1/search?q=food%20trucks%20near%20${zipCode}&center=${searchedBounds.geometry.lat},${searchedBounds.geometry.lng}&zoom=${zoomLevel}&q=${data?.map((record: { latitude: string | number; longitude: string | number }) => `${record.latitude},${record.longitude}`).join('|')}&key=${process.env.VITE_MAPS_API_KEY}`}>
      </iframe>}

      {!searchedBounds && <iframe 
        width="100vw"
        height="100vh" 
        className={styles.resultsMap} 
        loading="lazy" 
        allowFullScreen 
        src={`https://www.google.com/maps/embed/v1/search?q=food%20trucks%20near%20${zipCode}&zoom=${zoomLevel}&key=${process.env.VITE_MAPS_API_KEY}`}>
      </iframe>}
    </>
  )
}