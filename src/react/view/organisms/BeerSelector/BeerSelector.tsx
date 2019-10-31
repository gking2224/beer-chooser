import React, {useCallback, useState} from 'react';
import { MealInput, ErrorMessage } from '~/react/view/molecules';
import fetchBeersForMeal, { IBeerResult } from '~/react/api/beer-fetcher/fetch-beers';
import BeerList from '../../molecules/BeerList';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%'
  }
};

interface IBeerSelectorProps {
  classes: any;
};

const BeerSelector: React.FunctionComponent<IBeerSelectorProps> = ({ classes }) => {

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
    <div className={classes.root}>
      <MealInput onSelect={selectHandler} />
      {beers && <BeerList beers={beers} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};


export default withStyles(styles)(BeerSelector);
