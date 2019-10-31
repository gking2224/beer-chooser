import React, {useCallback} from 'react';
import { BeerSelector } from '~/react/view/organisms';

const App = () => {
  const selectHandler = useCallback((meal: string) => {
    console.log(`New meal: ${meal}`);
  }, []);

  return (
    <>
      <BeerSelector  />
    </>
  );
};

export default App;
