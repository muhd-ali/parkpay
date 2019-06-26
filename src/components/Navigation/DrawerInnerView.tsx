import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Payment from '@material-ui/icons/Payment';
import CardMembership from '@material-ui/icons/CardMembership';
import Home from '@material-ui/icons/Home';
import { WithStyles, withStyles, Typography, Card, CardContent, CardActionArea, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
}

export interface DrawerInnerViewProps extends WithStyles<typeof styles> {
}
export interface State {
}

class DrawerInnerView extends React.Component<DrawerInnerViewProps, State> {
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardContent>
              <Link>
                <Typography
                  gutterBottom
                  variant='h6'
                  component="h2"
                  color='textSecondary'
                >
                  BlockRedit
                </Typography>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
        <List>
          <RouterLink to="/">
            <ListItem button key={'Homepage'}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Homepage'} />
            </ListItem>
          </RouterLink>
          <RouterLink to="/quickpark">
            <ListItem button key={'Quick Park'}>
              <ListItemIcon>
                <Payment />
              </ListItemIcon>
              <ListItemText primary={'Quick Park'} />
            </ListItem>
          </RouterLink>
          <RouterLink to="/passes">
            <ListItem button key={'Saving Pass'}>
              <ListItemIcon>
                <CardMembership />
              </ListItemIcon>
              <ListItemText primary={'Saving Pass'} />
            </ListItem>
          </RouterLink>
        </List>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerInnerView);