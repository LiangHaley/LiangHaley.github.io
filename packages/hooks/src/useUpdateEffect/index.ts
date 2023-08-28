import { useEffect } from 'react';
import { createUpdateEffect } from '../createUpdateEffect';
const useUpdateEffect:any =  createUpdateEffect(useEffect);
export default useUpdateEffect