import React from 'react';
import moment from 'moment';
import { Typography, Table, TableRow, TableHead, TableCell, TableBody, Paper, withStyles, Theme } from '@material-ui/core';
import { IBeerResult } from '~/react/api/beer-fetcher/fetch-beers';

export interface IBearListProps {
  beers: IBeerResult[];
  classes: any;
}

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4)
  },
  image: {
    width: '20px'
  }
});

const formatFirstBrewed = (date: string) => {
  const match = date.match(/(.*)\/(.*)/);
  if (!match ) {
    return date;
  }
  return moment([match[2], 1, match[1]]).format('MMM YYYY');
}

const BeerList: React.FunctionComponent<IBearListProps> = ({beers, classes}) => {

  if (!beers.length) {
    return <p>Sorry, no beer goes with that dish. Try drinking wine, or maybe eat something else.</p>
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">Some beers you might enjoy</Typography>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell></TableCell>
          <TableCell>Description</TableCell>
          <TableCell>First Brewed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {beers.map(beer => {
          return (
            <TableRow key={beer.id}>
              <TableCell component="th" scope="row">
                {beer.name}
              </TableCell>
              <TableCell><img className={classes.image} src={beer.imageUrl} alt={beer.name}/></TableCell>
              <TableCell>{beer.description}</TableCell>
              <TableCell>{formatFirstBrewed(beer.firstBrewed)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </div>
  );
}

export default withStyles(styles)(BeerList);
