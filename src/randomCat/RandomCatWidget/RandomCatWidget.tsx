import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { randomCatSlice } from '~/randomCat/randomCatSlice';
import { CatRenderContract, CatRenderTech } from '~/randomCat/types';
import { CatRenderCSSModules } from '~/randomCat/CatRenders/CatRenderCSSModules';
import { Spinner } from '~/ui/Spinner';
import { CatRenderSCSSModules } from '~/randomCat/CatRenders/CatRenderSCSSModules';
import { CatRenderStyledComponents } from '~/randomCat/CatRenders/CatRenderStyledComponents';

const renderDictionary: Record<CatRenderTech, (props: CatRenderContract) => ReactNode> = {
  'CSS-MODULES': CatRenderCSSModules,
  STYLED: CatRenderStyledComponents,
  'SCSS-MODULES': CatRenderSCSSModules,
};

const REFRESH_TIMEOUT = 5000;

export function RandomCatWidget() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAppSelector((state) => state.randomCat.fetchRandomCatRequest);
  const [enabled, setIsEnabled] = useState(true);
  const [renderTech, setRenderTech] = useState<CatRenderTech>('STYLED');
  const [autoRefresh, setIsAutoRefresh] = useState(false);
  const [refreshCat, setRefreshCat] = useState(0);

  const fetchRandomCat = useCallback(() => {
    dispatch(randomCatSlice.thunks.fetchRandomCatThunk());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(randomCatSlice.actions.clear());
    };
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (enabled) {
      fetchRandomCat();
    }
    if (enabled && autoRefresh) {
      timerId = setInterval(fetchRandomCat, REFRESH_TIMEOUT);
    }

    return () => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
    };
  }, [enabled, autoRefresh, refreshCat]);

  const handleGetCat = () => {
    setRefreshCat((prev) => prev + 1);
  };

  const RenderComponent = renderDictionary[renderTech];

  return (
    <>
      <Spinner isShow={isLoading} />
      <RenderComponent
        renderTech={renderTech}
        changeRenderChange={setRenderTech}
        enabled={enabled}
        isLoading={isLoading}
        changeEnabled={setIsEnabled}
        autoRefresh={autoRefresh}
        changeAutoRefresh={setIsAutoRefresh}
        getCat={handleGetCat}
        catUrl={data === null ? null : data.url}
        fetchError={error}
      />
    </>
  );
}
