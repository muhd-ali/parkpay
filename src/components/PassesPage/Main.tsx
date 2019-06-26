import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid, Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { serverCommunicator } from 'models/ServerCommunicator';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
}

interface MainState {
    amount: number
    isInputEnabled: boolean
}

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props)
        this.state = {
            amount: 0.0,
            isInputEnabled: true,
        }
    }

    makeRequest() {
        this.setState({ isInputEnabled: false })
        serverCommunicator.putRequestForTransfer(this.state.amount)
            .then(() => {
                window.location.reload()
            })
    }

    render() {
        let { classes } = this.props;
        return (
            <div className={classes.toolbar}>
                <Paper>
                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={12}>
                            <Typography
                                style={{ padding: '30px' }}
                                variant='h4'
                                component='h2'
                            >
                                Save on passes.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/weekly_pass.png"
                                        title="Weekly Pass"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Weekly Pass $14.99
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Pay once and park for the week.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant='contained' size="small" color="primary">
                                        Purchase
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/monthly_pass.png"
                                        title="Weekly Pass"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Monthly Pass $49.99
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Pay once and park for the month.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant='contained' size="small" color="primary">
                                        Purchase
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Main);