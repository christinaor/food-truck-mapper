import FoodTruckLogo from '/src/assets/food-truck-logo.svg';

import styles from './styles.module.scss';

export default function TitleBar() {

  return (
    <div className={styles.titleBar}>
      <img className={styles.logo} src={FoodTruckLogo} alt="food truck logo for SF Food Truck Mapper" />
      <h1 className={styles.title}>SF Food Truck Mapper</h1>
    </div>
  )
};