import { useEffect } from 'react';

function Child() {
  console.log('Child: Render');
  useEffect(() => {
    console.log('Child: use effect');
  }, []);
  return <div>Child</div>;
}
export default Child;
