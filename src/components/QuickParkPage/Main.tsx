import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import { serverCommunicator } from 'models/ServerCommunicator';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
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
                                Quick pay for the parking.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={11}>
                            <TextField
                                id="from-time"
                                label="To"
                                // className={classes.textField}
                                value={this.state.amount}
                                onChange={(e) => { this.setState({ amount: parseFloat(e.target.value) }) }}
                                type='time'
                                margin="normal"
                                variant="outlined"
                                disabled={!this.state.isInputEnabled}
                            />
                        </Grid>
                        <Grid item lg={11}>
                            <TextField
                                id="to-time"
                                label="From"
                                // className={classes.textField}
                                value={this.state.amount}
                                onChange={(e) => { this.setState({ amount: parseFloat(e.target.value) }) }}
                                type='time'
                                margin="normal"
                                variant="outlined"
                                disabled={!this.state.isInputEnabled}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={24} justify='flex-end'>
                        <Grid item lg={1}>
                            <Button variant="contained" color="primary" onClick={() => this.makeRequest()} disabled={!this.state.isInputEnabled}>
                                Pay
                            </Button>
                        </Grid>
                        <Grid item lg={1}>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Main);