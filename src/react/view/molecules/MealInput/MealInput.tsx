import React, {useState, useCallback} from 'react';
import { TextField, Button, Typography, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme: Theme) => ({
  root: {
    marginTop : theme.spacing(4)
  },
  labeledInput: {
    display: 'flex',
    alignItems: 'baseline'
  }
});

export interface IMealInputProps {
  onSelect: (meal: string) => void;
  classes: any;
}

const MealInput: React.FunctionComponent<IMealInputProps> = ({onSelect, classes}) => {

  const [meal, setMeal] = useState('');
  const clickHandler = useCallback(() => {
    onSelect(meal);
  }, [meal]);

  const changeHandler = useCallback((e) => {
    setMeal(e.target.value);
  }, [setMeal]);

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h4">What are you eating tonight?</Typography>
        <div className={classes.labeledInput}>
          <TextField
            label="Meal"
            placeholder="What are you eating"
            value={meal}
            onChange={changeHandler}
          />
          <Button onClick={clickHandler}>Go Get Dem Beers</Button>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(MealInput);
