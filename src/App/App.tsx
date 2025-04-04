import styles from './App.module.scss';
import { RandomCatWidget } from '~/randomCat/RandomCatWidget';

export function App() {
  return (
    <>
      <div className={styles.App}>
        <RandomCatWidget />
      </div>
    </>
  );
}
