import spiner from '@/assets/spiner.svg';
import { memo } from 'react';

const Loader = memo(function () {
  return <img src={spiner} alt="spiner"></img>;
});

export default Loader;
