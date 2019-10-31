import * as React from 'react';
import { Typography,  Theme } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

const styles = (theme: Theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      maxWidth: '960px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    hero: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    flag: {
      width: '50px',
    },
    body: {
      display: 'flex',
      width: '100%',
      marginTop: `${theme.spacing(2)}`,
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  }
}
interface ILayoutProps {
  children: JSX.Element;
  classes: any;
}
const Layout: React.FunctionComponent<ILayoutProps> = ({classes, children}) => (
  <main className={classes.root}>
    <div className={classes.hero}>
      <img className={classes.flag} src='/polish-flag.png' alt={'Polish Flag'} />
      <Typography variant='h2'>Jacek's Beer Chooser</Typography>
    </div>
    <section className={classes.body}>
      {children}
    </section>
  </main>
);

// @ts-ignore - for some reason, it doesn't like flex direction values
export default withStyles(styles)(Layout);
