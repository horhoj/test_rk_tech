import * as Styled from './CatRenderStyledComponents.styled';
import { CatRenderContract } from '~/randomCat/types';

interface props extends CatRenderContract {}

export function CatRenderStyledComponents({
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
}: props) {
  return (
    <Styled.CatRenderStyledComponents>
      <Styled.BtnsWrapper>
        <Styled.Button
          onClick={() => changeRenderChange('SCSS-MODULES')}
          isActive={renderTech === 'SCSS-MODULES'}
          disabled={isLoading}
        >
          SCSS-MODULES
        </Styled.Button>
        <Styled.Button
          onClick={() => changeRenderChange('CSS-MODULES')}
          isActive={renderTech === 'CSS-MODULES'}
          disabled={isLoading}
        >
          CSS-MODULES
        </Styled.Button>
        <Styled.Button
          onClick={() => changeRenderChange('STYLED')}
          isActive={renderTech === 'STYLED'}
          disabled={isLoading}
        >
          STYLED-COMPONENTS
        </Styled.Button>
      </Styled.BtnsWrapper>

      <Styled.CheckedLabel>
        <Styled.Checked
          type={'checkbox'}
          checked={enabled}
          onChange={(e) => changeEnabled(e.target.checked)}
          disabled={isLoading}
        />{' '}
        Enabled
      </Styled.CheckedLabel>

      <Styled.CheckedLabel>
        <Styled.Checked
          type={'checkbox'}
          checked={autoRefresh}
          onChange={(e) => changeAutoRefresh(e.target.checked)}
          disabled={!enabled || isLoading}
        />{' '}
        AutoRefreshEvery 5 seconds
      </Styled.CheckedLabel>

      <div>
        <Styled.Button onClick={getCat} disabled={!enabled || isLoading}>
          Get cat
        </Styled.Button>
      </div>
      {catUrl && <Styled.CatImg src={catUrl} alt="random cat" />}
      {fetchError && <div>{fetchError}</div>}
    </Styled.CatRenderStyledComponents>
  );
}
