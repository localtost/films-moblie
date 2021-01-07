import { createSelectorHook } from 'react-redux';
import { RootState } from '../redux/rootReducer';

export const useSelector = createSelectorHook<RootState>();
