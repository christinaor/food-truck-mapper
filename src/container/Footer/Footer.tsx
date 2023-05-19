import GitHubLogo from '/src/assets/github-logo.svg';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <span className={styles.footer}>
      <a className={styles.link} href="https://christinaor.com">Christina Or</a> <span className={styles.text}>| MIT License</span><a className={styles.link} href="https://github.com/christinaor/food-truck-mapper"><img className={styles.logo} src={GitHubLogo} alt="GitHub logo" /></a>
    </span>
  )
}