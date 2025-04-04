export type CatRenderTech = 'SCSS-MODULES' | 'STYLED' | 'CSS-MODULES';

export interface CatRenderContract {
  renderTech: CatRenderTech;
  changeRenderChange: (val: CatRenderTech) => void;
  enabled: boolean;
  changeEnabled: (val: boolean) => void;
  autoRefresh: boolean;
  changeAutoRefresh: (val: boolean) => void;
  getCat: () => void;
  catUrl: string | null;
  fetchError: string | null;
  isLoading: boolean;
}
