import React, {useCallback, useState} from 'react';
import { MealInput, ErrorMessage } from '~/react/view/molecules';
import './BeerSelector.scss';
import fetchBeersForMeal, { IBeerResult } from '~/react/api/beer-fetcher/fetch-beers';
import BeerList from '../../molecules/BeerList';

const BeerSelector: React.FunctionComponent = () => {

  const [beers, setBeers] = useState<IBeerResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectHandler = useCallback((meal: string) => {
    setBeers(null);
    setError(null);
    fetchBeersForMeal(meal)
      .then((beers: IBeerResult[]) => {
        setBeers(beers);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className={'beer-selector'}>
      <MealInput onSelect={selectHandler} />
      {beers && <BeerList beers={beers} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};


export default BeerSelector;
