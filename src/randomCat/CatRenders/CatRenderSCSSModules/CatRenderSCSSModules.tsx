import classNames from 'classnames';
import styles from './CatRenderSCSSModules.module.scss';
import { CatRenderContract } from '~/randomCat/types';

interface Props extends CatRenderContract {}

export function CatRenderSCSSModules({
  catUrl,
  getCat,
  changeRenderChange,
  renderTech,
  enabled,
  changeEnabled,
  changeAutoRefresh,
  autoRefresh,
  fetchError,
  isLoading,
}: Props) {
  return (
    <div className={styles.CatRenderSCSSModules}>
      <div>
        <span className={styles.btnsWrapper}>
          <button
            onClick={() => changeRenderChange('SCSS-MODULES')}
            className={classNames(styles.button, renderTech === 'SCSS-MODULES' && styles.buttonActive)}
            disabled={isLoading}
          >
            SCSS-MODULES
          </button>
          <button
            onClick={() => changeRenderChange('CSS-MODULES')}
            className={classNames(styles.button, renderTech === 'CSS-MODULES' && styles.buttonActive)}
            disabled={isLoading}
          >
            CSS-MODULES
          </button>
          <button
            onClick={() => changeRenderChange('STYLED')}
            className={classNames(styles.button, renderTech === 'STYLED' && styles.buttonActive)}
            disabled={isLoading}
          >
            STYLED-COMPONENTS
          </button>
        </span>
      </div>

      <label className={styles.checkedLabel}>
        <input
          className={styles.checked}
          type={'checkbox'}
          checked={enabled}
          onChange={(e) => changeEnabled(e.target.checked)}
          disabled={isLoading}
        />{' '}
        Enabled
      </label>

      <label className={styles.checkedLabel}>
        <input
          className={styles.checked}
          type={'checkbox'}
          checked={autoRefresh}
          onChange={(e) => changeAutoRefresh(e.target.checked)}
          disabled={!enabled || isLoading}
        />{' '}
        AutoRefreshEvery 5 seconds
      </label>

      <div>
        <button onClick={getCat} className={styles.button} disabled={!enabled || isLoading}>
          Get cat
        </button>
      </div>
      {catUrl && <img src={catUrl} alt="random cat" className={styles.catImg} />}
      {fetchError && <div>{fetchError}</div>}
    </div>
  );
}
