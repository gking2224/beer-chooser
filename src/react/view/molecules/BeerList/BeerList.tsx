import React from 'react';
import moment from 'moment';
import { Typography, Table, TableRow, TableHead, TableCell, TableBody, Paper } from '@material-ui/core';
import { IBeerResult } from '~/react/api/beer-fetcher/fetch-beers';
import './BeerList.scss';

export interface IBearListProps {
  beers: IBeerResult[];
}

const formatFirstBrewed = (date: string) => {
  const match = date.match(/(.*)\/(.*)/);
  console.log(match);
  if (!match ) {
    return date;
  }
  return moment([match[2], 1, match[1]]).format('MMM YYYY');
}

const BeerList: React.FunctionComponent<IBearListProps> = ({beers}) => {

  if (!beers.length) {
    return <p>Sorry, no beer goes with that dish. Try drinking wine, or maybe eat something else.</p>
  }

  return (
    <Paper className={'beer-list'}>
      <Typography variant="h4">Beers you might enjoy</Typography>
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
              <TableCell><img className={'beer-list__image'} src={beer.imageUrl} alt={beer.name}/></TableCell>
              <TableCell>{beer.description}</TableCell>
              <TableCell>{formatFirstBrewed(beer.firstBrewed)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </Paper>
);
}

export default BeerList;
