import { useEffect } from 'react';
import { createUpdateEffect } from '../createUpdateEffect';
var useUpdateEffect = createUpdateEffect(useEffect);
export default useUpdateEffect;