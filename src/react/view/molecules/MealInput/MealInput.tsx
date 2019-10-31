import React, {useState, useCallback, ChangeEvent} from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import './MealInput.scss';

export interface IMealInputProps {
  onSelect: (meal: string) => void;
}

const MealInput: React.FunctionComponent<IMealInputProps> = ({onSelect}) => {

  const [meal, setMeal] = useState('');
  const clickHandler = useCallback(() => {
    onSelect(meal);
  }, [meal]);

  const changeHandler = useCallback((e) => {
    setMeal(e.target.value);
  }, [setMeal]);

  return (
    <>
      <div className={'meal-input'}>
        <Typography variant="h4">What are you eating tonight?</Typography>
        <TextField
          className="meal-input__input"
          required
          label="Required"
          placeholder="What are you eating"
          value={meal}
          onChange={changeHandler}
        />
        <Button onClick={clickHandler}>Go Get Dem Beers</Button>
      </div>
    </>
  );
}

export default MealInput;
